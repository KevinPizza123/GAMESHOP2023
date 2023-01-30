
import { Exclude, Expose } from 'class-transformer';
import { BaseVideogamesDto } from './base-videogames.dto';

@Exclude()
export class ReadVideogamesDto extends BaseVideogamesDto {
  //exponer el valor del atributo
  @Expose()
  readonly title;

  @Expose()
  readonly description;

  @Expose()
  readonly price;

  @Expose()
  readonly categoryId;

  @Expose()
  readonly images;

}