import { BaseVideogamesDto } from "./base-videogames.dto";
import {PartialType} from '@nestjs/swagger';


export class UpdateVideogamesDto extends PartialType(BaseVideogamesDto){
    
    

}