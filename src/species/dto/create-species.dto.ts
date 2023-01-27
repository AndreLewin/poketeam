import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateSpeciesDto {
  @IsString()
  name: string;

  @IsBoolean()
  @IsOptional()
  isLegendary: string;
}
