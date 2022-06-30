import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { LoginComponent } from './login/login.component';
import { VerComponent } from './ver/ver.component';

const routes: Routes = [
  {path:'home', component: LoginComponent},
  {path:'ver', component: VerComponent},
  {path:'crear', component: CrearComponent},
  {path:'editar/:id', component: EditarComponent},
  {path: '', redirectTo:'home' , pathMatch: 'full'},
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
