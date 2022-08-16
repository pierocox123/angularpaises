import { Component, OnInit } from '@angular/core';
import { Ipaises } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-porpais',
  templateUrl: './porpais.component.html',
  styles: [
  ]
})
export class PorpaisComponent  {
  constructor(  private paisservice:PaisService) { }

  termino :string ='hola';
  error: boolean = false;
  paises :Ipaises[] = [];

  buscar ()
  {
    this.error=false;
    this.paisservice.buscarpais(this.termino)
    .subscribe((paises)=>{
      this.paises=paises;
      this.error=false;

    } , (erro) =>
      {
        this.error=true;
        this.paises=[];


      });
    console.log(this.termino);
  }

}
