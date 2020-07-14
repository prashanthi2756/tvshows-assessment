import { Component, OnInit } from '@angular/core';
import { ShowSearchService } from '../show-search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchValue: string;

  constructor(private shows: ShowSearchService) { }

  ngOnInit(): void {
  }
  search(val: any) {
    this.shows.getSearchResults(val);
  }
}
