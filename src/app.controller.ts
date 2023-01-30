import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("")
  runScript() {
    return this.appService.runScript();
  }

  @Get("/species")
  getSpecies() {
    return this.appService.getSpecies();
  }

  @Get("/pokemons")
  getPokemons() {
    return this.appService.getPokemons();
  }
}
