
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@Entity()
export class Species {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  isLegendary: boolean;

  @OneToMany(() => Pokemon, (pokemon) => pokemon.species)
  pokemons: Pokemon[]

  // evolutions
  @OneToMany(() => Species, (species) => species.previousForm, { cascade: true })
  evolutions: Species[]

  @ManyToOne(() => Species, (species) => species.evolutions)
  previousForm: Species

  // for cascade deletion, you have to put it on the @ManyToOne
  // e.g., if you want that deleting a user deletes all their message:
  // on the Message entity
  // @ManyToOne((type) => User, (user) => user.comments, { 
  //   onDelete: 'CASCADE' 
  // })
  // user: User;
  // https://www.kindacode.com/snippet/cascade-delete-in-typeorm/
}
