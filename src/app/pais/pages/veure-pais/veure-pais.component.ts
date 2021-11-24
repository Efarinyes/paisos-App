import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators'

import { PaisService } from '../../services/pais.service';
import { Pais, Translation } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-veure-pais',
  templateUrl: './veure-pais.component.html',
  styles: [
  ]
})
export class VeurePaisComponent implements OnInit {

  pais!: Pais[];
  

  constructor( private activatedRoute: ActivatedRoute, private paisService: PaisService ) { }

  ngOnInit(): void {

      // Mètode amb operadors RxJs (SwitchMap)
      this.activatedRoute.params
          .pipe(
              switchMap( ({id, borders}) => this.paisService.paisPerCodi(id)),
              
              tap(console.log)
          )
          .subscribe( pais => {
            this.pais = pais
          })
            

        

      // Mètode funcional però no òptim
      // this.activatedRoute.params
      //     .subscribe( ({ id }) => {
      //       console.log(id)

      //       this.paisService.paisPerCodi(id)
      //           .subscribe( pais => {
      //             console.log(pais)
      //           })
      //       })
      
  }
  
}
