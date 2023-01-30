import { Component, OnInit } from '@angular/core';
import { VideogamesHttpService } from 'src/app/services/Videogames-http.service';

@Component({
  selector: 'app-Videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css'],
})
//ngoninit se ejecuta luego del constructor
export class VideogamesComponent implements OnInit {
  //httpclient es una clase hacer las peticiones
  constructor(private VideogamesHttpService: VideogamesHttpService) {} //Inyeccion de dependencia

  ngOnInit(): void {
    //this.getProduct();
    //this.getProducts();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }
  //getAll me devuelve un observable
  getVideogames() {
    return this.VideogamesHttpService.getAll().subscribe((response) => {
      console.log(response);
    });
  }
  //subscribe lista de espera va llegar la respuesta
  //Observable trae la informacion

  getVideogame() {
    return this.VideogamesHttpService.getOne(6).subscribe((response) => {
      console.log(response);
    });
  }
  createVideogames() {
    const data ={
      id: 540,
        title: "Overwatch 2",
        thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
        short_description: "A hero-focused first-person team shooter from Blizzard Entertainment.",
        game_url: "https://www.freetogame.com/open/overwatch-2",
        genre: "Shooter",
        platform: "PC (Windows)",
        publisher: "Activision Blizzard",
        developer: "Blizzard Entertainment",
        release_date: "2022-10-04",
        freetogame_profile_url: "https://www.freetogame.com/overwatch-2",

    }
    return this.VideogamesHttpService.store(data).subscribe((response) => {
      console.log(response);
    });
  }

  updateVideogames() {
    const data ={
      id: 540,
        title: "Overwatch 2",
        thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
        short_description: "A hero-focused first-person team shooter from Blizzard Entertainment.",
        game_url: "https://www.freetogame.com/open/overwatch-2",

    }
    return this.VideogamesHttpService.update(data, 8).subscribe((response) => {
      console.log(response);
    });
  }
  deleteVideogames() {
    return this.VideogamesHttpService.destroy(6).subscribe((response) => {
      console.log(response);
    });
  }
}
//del component llama los metodos al servicio
