import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CatalogueComponent } from './catalogue/catalogue.component';
import { StaticModule } from '../static/static.module';
import { HomeComponent } from './home/home.component';

import { VideojuegosComponent } from '../videojuegos/videojuegos.component';
import { TecnologiaComponent } from '../tecnologia/tecnologia.component';
import { ProximamenteComponent } from '../proximamente/proximamente.component';
import { VideogamesComponent } from './videogame/videogames.component';



const routes: Routes = [

  {
    path: 'dashboard',
    component: PagesComponent,
    //Rutas hijas
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'videogames',
        component: VideogamesComponent,
      },
      {
        path: 'catalogue',
        component: CatalogueComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'Videojuegos',
        component: VideojuegosComponent,
      },
      {
        path: 'tecnologia',
        component: TecnologiaComponent,
      },
      
      {
        path: 'proximamente',
        component: ProximamenteComponent,
      }






    ],
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StaticModule,
    RouterModule.forChild(routes)
  ]
  //Forchild invoca a los hijos
})
export class PagesRoutingModule { }
