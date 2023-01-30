/* eslint-disable prettier/prettier */
import { IsInt, IsPositive } from "class-validator";
import { BaseVideogamesDto } from "./base-videogames.dto";
import {
    isBooleanValidationOptions,
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
    IsArrayValidationOptions,
    isPositiveValidationOptions,
    IsIntValidationOptions

  } from '@shared/validation';

//extends accede a los atributos de la clase padre
export class CreateVideogamesDto extends BaseVideogamesDto{

    

    

}