import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

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
