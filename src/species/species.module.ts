import { Module } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { SpeciesController } from './species.controller';
import { CreateSpeciesValidation } from './pipes/create-species.validation';

@Module({
  controllers: [SpeciesController],
  providers: [
    SpeciesService,
    CreateSpeciesValidation
  ]
})
export class SpeciesModule { }
