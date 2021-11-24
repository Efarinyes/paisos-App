import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-per-regio',
  templateUrl: './per-regio.component.html',
  styles: [ `
    button {
      margin-right: 7px;
    }
  `
  ]
})
export class PerRegioComponent {
  
  regions: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania']
  regioActiva: string = ''
  paisos: Pais[] = []

  constructor( private paisService: PaisService) { }
  
  cambiaClaseCSS( regio: string) {
    return (regio === this.regioActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }


  activarRegio( regio: string) {

    if( this.regioActiva === regio) {return}  
    this.regioActiva = regio 
    this.paisos = []
   // console.log(this.regioActiva)
    // Incoprporar mètode del servei
    this.paisService.paisperRegio(regio)
        .subscribe( paisos => {
          this.paisos = paisos
          
          // console.log(paisos)
        })
  }
 
}
