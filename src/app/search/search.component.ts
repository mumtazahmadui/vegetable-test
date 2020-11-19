import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { pluck, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchForm') searchForm: NgForm;

  constructor(public service: DataService) {

  }

  ngOnInit() {
    // add corresponding validators
    // write a function that calls changeVegetableName upon value change in the form
  }

  ngAfterViewInit(): void {
    const formValue = this.searchForm.valueChanges;
    formValue.pipe(
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe(res => {
      console.log(res);
      this.service.setVegetableList(res);

    })
  }
}
