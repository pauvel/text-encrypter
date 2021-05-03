import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPageComponent } from './inicio-page/inicio-page.component';
import { EncriptarPageComponent } from './encriptar-page/encriptar-page.component';
import { ConocenosPageComponent } from './conocenos-page/conocenos-page.component';



@NgModule({
  declarations: [
    InicioPageComponent,
    EncriptarPageComponent,
    ConocenosPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InicioPageComponent,
    EncriptarPageComponent,
    ConocenosPageComponent
  ]
})
export class PagesModule { }
