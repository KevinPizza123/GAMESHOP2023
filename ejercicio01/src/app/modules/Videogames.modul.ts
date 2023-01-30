import { CategoryModel} from "./category.modul";

export interface VideogamesModel {
id: number;
title: string ;
price: string ;
description: string ;
images:string[]
categoryId: number;
}

export interface CreateVideogamesDto extends Omit<VideogamesModel, "id" | "Videogames" > {
    id:number;//traer un atributo
}

//partial la actualizacion puede ser completa o parcial.
export interface UpdateVideogamesDto extends Partial<VideogamesModel> {
  id?:number;
}
