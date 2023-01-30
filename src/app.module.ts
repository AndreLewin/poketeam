import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpeciesModule } from './species/species.module';
import { Species } from './entities/species.entity';
import { Pokemon } from './entities/pokemon.entity';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    // https://stackoverflow.com/questions/52570212/nestjs-using-configservice-with-typeormmodule
    // https://docs.nestjs.com/techniques/database#async-configuration
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Species, Pokemon]),
    SpeciesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
