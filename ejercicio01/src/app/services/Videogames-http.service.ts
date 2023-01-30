import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateVideogamesDto, VideogamesModel, UpdateVideogamesDto } from '../modules/Videogames.modul';
//servicio se encarga de hacer la peticion y la devuelve al componente
//servicio hace la peticion al back y le llega la respuesta
//todos los componentes de comunican con un solo servicio

@Injectable({ //Decorador
  providedIn: 'root'
})
export class VideogamesHttpService {
  readonly API_URL:string="https://www.freetogame.com/api/games";//solo de lectura la vareiable
  constructor(private httpClient: HttpClient) { }//metodos httpclient
  //productmode[]Cuando recuperamos todo el arreglo de objetos
  getAll():Observable<VideogamesModel[]>{
    const url = `${this.API_URL}`;
    return this.httpClient.get<VideogamesModel[]>(this.API_URL);
   }

   getOne(id:VideogamesModel['id']):Observable<VideogamesModel> {
   const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<VideogamesModel>(url);
   }
         //objeto de tipo createproductDto
   store(product:CreateVideogamesDto):Observable<VideogamesModel> {
    return this.httpClient.post<VideogamesModel>(this.API_URL, product)
   }

   update(product:UpdateVideogamesDto,id:VideogamesModel['id']):Observable<VideogamesModel>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<VideogamesModel>(url, product)
   }

   destroy(id: VideogamesModel['id']):Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
   }

// ng g s services/productHttp   -genera el archivo de servicio
