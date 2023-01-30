
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Species } from './species.entity';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // https://stackoverflow.com/a/69852449
  @Column({
    type: String,
    unique: true,
    nullable: true,
  })
  gender!: string | null;

  @ManyToOne(() => Species, (species) => species.pokemons)
  species: Species
}
