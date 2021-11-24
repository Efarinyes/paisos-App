import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()

  @Input() placeholder: string = ''

  debouncer: Subject<string> = new Subject()
  
  ngOnInit() {
      this.debouncer
          .pipe(debounceTime(300))
          .subscribe( valor => {
            this.onDebounce.emit(valor)
          })
  }
  
  terme: string = ''

  cercar() {
    this.onEnter.emit(this.terme)
  }
  pressTecla() {
      this.debouncer.next(this.terme)
  }
}
