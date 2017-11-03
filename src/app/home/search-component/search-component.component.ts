import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.less']
})
export class SearchComponentComponent implements OnInit {

  constructor() { }
  private categories:string[];
  private searchText: string;
  private selectedCategory : string;


  ngOnInit() {


    //make request to Api for categories
    this.categories = [
       "One",
       "Two",
       "Three"
    ];
  }

}
