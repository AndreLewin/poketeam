
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Species {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  isLegendary: boolean;

  // isEvolved form of
  // TODO: evolved form (reference an other species)
}
