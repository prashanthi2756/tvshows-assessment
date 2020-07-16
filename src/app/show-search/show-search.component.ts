import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../tvshows.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ShowSearchService } from '../show-search.service';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.scss']
})
export class ShowSearchComponent implements OnInit {

  searchResults:string;
  searchTitle: string;
  constructor(private route: ActivatedRoute,
    private showSearchService: ShowSearchService) { }

  ngOnInit(): void {
    this.showSearchService.showsData.subscribe( (data: any) => {
      this.searchResults = data
    })
    this.showSearchService.searchInput.subscribe( (data: any) => {
      this.searchTitle = data
    })
  }

}
