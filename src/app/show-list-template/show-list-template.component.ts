import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-list-template',
  templateUrl: './show-list-template.component.html',
  styleUrls: ['./show-list-template.component.scss']
})
export class ShowListTemplateComponent implements OnInit {
  @Input() searchResults: any[];
  @Input() allShows;
  @Input() genreInput: string;
  start = 0;
  maxItems = 5;
  end = this.maxItems;
  genre: string;
  searchText: string;
  showsData: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    this.genre = this.genreInput;
    this.showsData = this.searchResults ? this.searchResults : [];
    this.start = 0;
    this.end = this.maxItems;
  }
  prev() {
    this.start -= this.maxItems;
    this.end -= this.maxItems;
    if (this.start < 0) {
      this.start = 0;
      this.end = this.maxItems;
    }
  }
  next() {
 
    if (this.end >= this.showsData.length) {
      this.start = this.showsData.length - (this.maxItems + 1);
      this.end = this.showsData.length - 1;
    } else {
       this.start += this.maxItems;
       this.end += this.maxItems;
    }
  }
}
