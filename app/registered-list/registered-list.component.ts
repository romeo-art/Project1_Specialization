import { Component, OnInit, Input, Output } from '@angular/core';
import { registeredData } from '../registeredDataStorage';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-registered-list',
  templateUrl: './registered-list.component.html',
  styleUrls: ['./registered-list.component.css']
})
export class RegisteredListComponent implements OnInit {
  
  @Input() toSubmitData: registeredData[];
  @Output() editName = new EventEmitter;
  @Output() editAddress = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  edit() {

  }
}
