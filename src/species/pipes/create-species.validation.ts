
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class CreateSpeciesValidation implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("value | pipes/create-species.validation.ts l7", value)

    const name = value?.name ?? null
    if (typeof name === null) {
      throw new BadRequestException("A name for the species is required");
    }
    if (typeof name !== "string") {
      throw new BadRequestException("The name for the species must be a string");
    }

    return value;
  }
}