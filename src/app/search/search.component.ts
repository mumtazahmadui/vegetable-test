import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
//using normal data passing instead of Reactive Form
  public inputVal: any;
  constructor( public service: DataService) { 
    
  }

  ngOnInit() {
    // add corresponding validators
  

     // write a function that calls changeVegetableName upon value change in the form
  }
  onFormChange($event) {
   // console.log($event);
    this.service.setVegetableList($event);
  }

}