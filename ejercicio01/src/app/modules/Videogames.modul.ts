import { CategoryModel} from "./category.modul";

export interface VideogamesModel {
  id: number;
title: string ;
thumbnail: string ;
short_description: string ;
game_url: string ;
genre: string ;
platform: string ;
publisher: string ;
developer: string ;
release_date: string ;
freetogame_profile_url: string ;
}

export interface CreateVideogamesDto extends Omit<VideogamesModel, "id" | "Videogames" > {
    id:number;//traer un atributo
}

//partial la actualizacion puede ser completa o parcial.
export interface UpdateVideogamesDto extends Partial<VideogamesModel> {
  id?:number;
}
