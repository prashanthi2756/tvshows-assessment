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
  start: number;
  maxItems: number;
  end: number;
  genre: string;
  searchText: string;
  showsData: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.start = 0;
    this.maxItems = !this.allShows ? 5 : 0;
    this.end = this.maxItems;
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
    this.start += this.maxItems;
    this.end += this.maxItems;
    if (this.end >= this.showsData.length) {
      this.start = this.showsData.length - (this.maxItems + 1);
      this.end = this.showsData.length - 1;
    }
  }
}
