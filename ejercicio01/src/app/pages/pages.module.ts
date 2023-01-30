import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home/home.component';
import { StaticModule } from '../static/static.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { VideogamesComponent } from './videogame/videogames.component';



@NgModule({
  declarations:[
    DashboardComponent,
    CatalogueComponent,
    VideogamesComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,



  ],
  exports:[
    DashboardComponent,
    CatalogueComponent,
    VideogamesComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent



  ],
  imports: [
    CommonModule,
    StaticModule
  ]
})
export class PagesModule { }
