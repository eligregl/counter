import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counterParent: number;
  constructor() { }
  //cada que cambia el componente padre se aplica esta:
  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }

  ngOnInit(): void {
  }
}
