import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceCandidatoComponent } from './interface-candidato/interface-candidato.component';
import { loginComponent } from './login/login.component';

const routes: Routes = [
  {path:"login",component:loginComponent},
  {path:"Candidatos",component:InterfaceCandidatoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
