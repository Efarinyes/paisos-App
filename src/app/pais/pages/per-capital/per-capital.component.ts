import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-per-capital',
  templateUrl: './per-capital.component.html',
  styles: [
  ]
})
export class PerCapitalComponent implements OnInit {

  terme: string = ''
  tenimError: boolean = false
  paisos: Pais[] = []

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }
  cercar( terme: string ) {

    this.tenimError = false
    this.terme = terme
    // console.log(this.terme)

    this.paisService.cercarCapital(terme)
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

}
