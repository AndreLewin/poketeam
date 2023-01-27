import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { CreateSpeciesDto } from './dto/create-species.dto';
import { UpdateSpeciesDto } from './dto/update-species.dto';
import { CreateSpeciesValidation } from './pipes/create-species.validation';

@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) { }

  // for validation, we prefer to use class-validator
  // https://docs.nestjs.com/pipes#class-validator
  // that way, we can reuse the structure of CreateSpeciesDto for the validation

  @Post()
  @UsePipes(CreateSpeciesValidation)
  // this actually asserts CreateSpeciesDto
  // so we need to first validate createSpeciesDto with a pipe
  create(@Body() createSpeciesDto: CreateSpeciesDto) {
    return this.speciesService.create(createSpeciesDto);
  }

  @Get()
  findAll() {
    return this.speciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speciesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpeciesDto: UpdateSpeciesDto) {
    return this.speciesService.update(+id, updateSpeciesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speciesService.remove(+id);
  }
}
