import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateSpeciesDto {
  @IsString()
  name: string;

  @IsBoolean()
  @IsOptional()
  isLegendary?: boolean;
}

export class UpdateSpeciesDto extends PartialType(CreateSpeciesDto) {
  @IsString()
  @IsOptional()
  name?: string;

  @IsBoolean()
  @IsOptional()
  isLegendary?: boolean;
}
