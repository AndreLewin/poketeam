
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class SpeciesTranslation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  // @Column({ default: false })
  french: string;

  @Column()
  // @Column({ default: false })
  spanish: string;
}
