import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ParseIntPipe } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { Species } from './entities/species.entity';
import { UpdateSpeciesDto, CreateSpeciesDto } from './species.dto'

@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) { }

  // for validation, we prefer to use class-validator
  // https://docs.nestjs.com/pipes#class-validator
  // that way, we can reuse the structure of CreateSpeciesDto for the validation

  @Post()
  // @UsePipes(CreateSpeciesValidation)
  // "create(@Body() createSpeciesDto: CreateSpeciesDto)" actually asserts CreateSpeciesDto
  // so we need to first validate createSpeciesDto with a pipe (@UsePipes(CreateSpeciesValidation))
  //// an alternative is to use class-validator through ValidationPipe()
  create(@Body(new ValidationPipe()) createSpeciesDto: CreateSpeciesDto) {
    // this way of validating (via ValidationPipe()) is kinda broken because we have to specify "Species" for ValidationPipe to do its job
    // but species is not a Species, it is a Partial<Species> (is does not have .id or some optional properties)
    // this forces us to always validate on a dto specific for this method
    return this.speciesService.create(createSpeciesDto);
  }

  @Get()
  findAll() {
    return this.speciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.speciesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body(new ValidationPipe()) speciesUpdate: UpdateSpeciesDto) {
    return this.speciesService.update(+id, speciesUpdate);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speciesService.remove(+id);
  }
}
