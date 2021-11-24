import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-per-pais',
  templateUrl: './per-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }

    `
  ]
})
export class PerPaisComponent {
  
  terme: string = ''
  tenimError: boolean = false
  paisos: Pais[] = []
  paisosSuggerits: Pais[] = []
  mostrarSuggerits: boolean = false
  

  constructor( private paisService: PaisService) { }

  cercar( terme: string ) {

    this.tenimError = false
    this.terme = terme
    // console.log(this.terme)

    this.paisService.cercarPais(terme)
        .subscribe( paisos => {
            // console.log(paisos)
            this.paisos = paisos
            this.terme = ''
            
        }, (err) => {
          this.tenimError = true
          this.paisos = []
          console.log('Error', err)
          
        })
    
  }
  suggeriments( terme: string ) {
      this.tenimError = false
      this.terme = terme
      this.mostrarSuggerits = true
      
      this.paisService.cercarPais(terme)
          .subscribe( paisos => this.paisosSuggerits = paisos.splice(0,5), (err) => this.paisosSuggerits = [])
  }
  cercarSuggerits(terme: string) {
    this.cercar(terme)
    this.mostrarSuggerits = false

  }
}
