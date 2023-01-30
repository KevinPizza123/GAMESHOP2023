import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './Videojuegos.component.html',
  styleUrls: ['./Videojuegos.component.css']
})
export class VideojuegosComponent {
	@Input()
  cantidad!: number;
	elementosVideojuegos!: {};
	//cantidad;
	elementosMostrar: any;


  constructor() {


  		 //this.obtenerLocalStorage();
  		//this.contador();
  		//this.elementosMostrar[this.elementosCarrito];
  		//console.log(this.elementosCarrito);

   }

  	obtenerLocalStorage(){
	///	this.elementosCarrito = JSON.parse(localStorage.getItem("carrito"));

}

	contador(){

		this.cantidad = Object.keys(this.elementosVideojuegos).length;
  		//console.log(this.cantidad);


}
	}

