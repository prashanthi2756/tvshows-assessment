import { Component, OnInit } from '@angular/core';
import { ShowSearchService } from '../services/show-search.service';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.scss']
})
export class ShowSearchComponent implements OnInit {
  searchResults: any[];
  searchTitle: string;
  constructor(private showSearchService: ShowSearchService) { }

  ngOnInit(): void {
    this.showSearchService.showsData.subscribe((data: any) => {
      this.searchResults = data;
    });
    this.showSearchService.searchInput.subscribe((data: any) => {
      this.searchTitle = data;
    });
  }

}
