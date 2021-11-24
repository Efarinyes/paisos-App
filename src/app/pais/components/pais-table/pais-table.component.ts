import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styles: [
  ]
})


export class PaisTableComponent {

  @Input() paisos: Pais[] = []
  
  constructor() {}
  
}
