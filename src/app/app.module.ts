import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceCandidatoComponent } from './interface-candidato/interface-candidato.component';
import { loginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    InterfaceCandidatoComponent,
    loginComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
