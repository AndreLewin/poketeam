import { Module } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { SpeciesController } from './species.controller';
import { CreateSpeciesValidation } from './pipes/create-species.validation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Species } from './entities/species.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Species])],
  controllers: [SpeciesController],
  providers: [
    SpeciesService,
    CreateSpeciesValidation
  ]
})
export class SpeciesModule { }
