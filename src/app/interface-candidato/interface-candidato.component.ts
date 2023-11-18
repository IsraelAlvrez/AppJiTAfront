import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-interface-candidato',
  templateUrl: './interface-candidato.component.html',
  styleUrls: ['./interface-candidato.component.css']
})
export class InterfaceCandidatoComponent {
  ngOnInit(): void {
    
  }
  constructor(private router:Router){}

  
  returnlogin(){
    this.router.navigate(["login"])
  }
  Aptutud ="Alta"
  Ingles="basico"
  EdoCivil="Soltero"
  
  


 }
  


