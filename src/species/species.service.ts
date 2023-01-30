import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Species } from '../entities/species.entity';
import { UpdateSpeciesDto } from './species.dto'

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species)
    private speciesRepository: Repository<Species>,
  ) { }

  create(speciesP: Partial<Species>) {
    return this.speciesRepository.save(speciesP);
  }

  findAll(): Promise<Species[]> {
    return this.speciesRepository.find();
  }

  findOne(id: number): Promise<Species | null> {
    return this.speciesRepository.findOneBy({ id });
  }

  update(id: number, speciesUpdate: Partial<Species>) {
    return this.speciesRepository.update({ id }, speciesUpdate)
  }

  remove(id: number) {
    return this.speciesRepository.delete({ id })
  }
}
