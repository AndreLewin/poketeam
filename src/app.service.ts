import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Species } from './entities/species.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Species)
    private speciesRepository: Repository<Species>,
    @InjectRepository(Pokemon)
    private pokemonsRepository: Repository<Pokemon>,
  ) { }

  async runScript(): Promise<any> {
    // oneToMany manyToOne on same entity with cascade
    // { cascade: true } is placed on the @OneToMany
    // this will automatically place red.previousForm and blue.previousForm (the @ManyToOne)

    const blueOrRed = new Species()
    blueOrRed.name = "blueOrRed"
    const red = new Species()
    red.name = "red"
    const blue = new Species()
    blue.name = "blue"
    blueOrRed.evolutions = [blue, red]
    this.speciesRepository.save(blueOrRed)


    // ---------

    // oneToMany manyToOne on same entity without cascade
    // the relation must first be saved from the many side
    // create the one
    // save the one
    // create the manies
    // manies.one = one
    // save the manies
    // one.manies = [...manies]
    // save the one

    // const newSpecies = new Species()
    // newSpecies.name = "eevee"
    // this.speciesRepository.save(newSpecies)

    // const newEvolution1 = new Species()
    // newEvolution1.name = "jolteon"
    // newEvolution1.previousForm = newSpecies
    // this.speciesRepository.save(newEvolution1)

    // const newEvolution2 = new Species()
    // newEvolution2.name = "umbreon"
    // newEvolution2.previousForm = newSpecies
    // this.speciesRepository.save(newEvolution2)

    // newSpecies.evolutions = [newEvolution1, newEvolution2]
    // this.speciesRepository.save(newSpecies)
  }

  async getSpecies(): Promise<Species[]> {
    // console.log(process.env)
    // const computerName = this.configService.get<string>("NAME", "default value")
    return this.speciesRepository.find({
      relations: {
        pokemons: true,
        evolutions: true,
        previousForm: true
      }
    });
  }

  async getPokemons(): Promise<Pokemon[]> {
    // console.log(process.env)
    // const computerName = this.configService.get<string>("NAME", "default value")
    return this.pokemonsRepository.find({
      relations: {
        species: true
      }
    });
  }
}
