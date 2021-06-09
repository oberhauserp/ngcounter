import { Component, OnInit } from '@angular/core';
import {Counter} from '../counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  constructor() {
    this.counters = []
   }
  counters: Counter[];
  name = 'Counter Wall';

  create(){
    this.counters.push(new Counter())
  }
  ngOnInit(): void {
  }

}
