import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {
  @Input() searchResults: any[];
  @Input() searchInput: any[];
  @Input() genreInput: string;
  start = 0;
  maxItems = 5;
  end = this.maxItems;
  genre: string;
  isLoading = false;
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
    this.start += this.maxItems;
    this.end += this.maxItems;
    if (this.end >= this.showsData.length) {
      this.start = this.showsData.length - (this.maxItems + 1);
      this.end = this.showsData.length - 1;
    }
  }
}
