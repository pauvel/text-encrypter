import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConocenosPageComponent } from './pages/conocenos-page/conocenos-page.component';
import { EncriptarPageComponent } from './pages/encriptar-page/encriptar-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';

const routes: Routes = [
  {path: '', component: InicioPageComponent, pathMatch: 'full'},
  {path:'encrypt', component: EncriptarPageComponent},
  {path:'conoce-mas', component: ConocenosPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
