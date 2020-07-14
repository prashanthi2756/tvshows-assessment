import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../tvshows.service';
import {
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { ShowSearchService } from '../show-search.service';

@Component({
  selector: 'app-tvshows-dashboard',
  templateUrl: './tvshows-dashboard.component.html',
  styleUrls: ['./tvshows-dashboard.component.scss']
})
export class TvshowsDashboardComponent implements OnInit {
  data: any = [];
  showsDataDrama: any = [];
  showsDataSports: any = [];
  showsDataComedy: any = [];
  searchResults: any = [];
  searchInput: string;
  showStatus: string;
  showRating: string;
  sortBy: string;
  showsForm = new FormGroup({
    showStatus: new FormControl(),
    showRating: new FormControl(),
    sortBy: new FormControl()
  });
  constructor(
    private tvshowsService: TvshowsService,
    private showSearchService: ShowSearchService,
    private fb: FormBuilder,

  ) { }

  ngOnInit() {
    this.showsForm = this.fb.group({
      showStatus: '',
      showRating: '',
      sortBy: ''
    });
    this.loadData();
    this.showSearchService.showsData.subscribe( (data: any) => {
      this.searchResults = data
    })
    this.showSearchService.searchInput.subscribe( (data: any) => {
      this.searchInput = data
    })
  }
  loadData() {
    this.tvshowsService.getShowList().subscribe((data: any) => {
      this.data = data;
      this.genreData();
    });
  }
  genreData() {
     this.showStatus = this.showsForm.controls['showStatus'].value;
     this.showRating = this.showsForm.controls['showRating'].value;
    this.showsDataDrama = this.data.filter(item => (this.showStatus  ? item.genres.indexOf('Drama') >= 0 && item.status === this.showStatus  && item.rating.average >= this.showRating  : item.genres.indexOf('Drama') >= 0 && item.rating.average >= this.showRating));
    this.showsDataComedy = this.data.filter(item => (this.showStatus  ? item.genres.indexOf('Comedy') >= 0 && item.status === this.showStatus  && item.rating.average >= this.showRating  : item.genres.indexOf('Comedy') >= 0 && item.rating.average >= this.showRating));
    this.showsDataSports = this.data.filter(item => (this.showStatus  ? item.genres.indexOf('Sports') >= 0 && item.status === this.showStatus  && item.rating.average >= this.showRating  : item.genres.indexOf('Sports') >= 0 && item.rating.average >= this.showRating));
  }
  ratingChange() {
    this.genreData();
  }
  statusChange() {
    this.genreData();
  }
  sortChange() {
    const value = this.showsForm.controls['sortBy'].value;
    this.showsDataDrama = this.showsDataDrama.sort((a, b) => (value === 'A-Z' ? ((a.name > b.name) ? 1 : -1) : ((b.name > a.name) ? 1 : -1)));
    this.showsDataComedy = this.showsDataComedy.sort((a, b) => (value === 'A-Z' ? ((a.name > b.name) ? 1 : -1) : ((b.name > a.name) ? 1 : -1)));
    this.showsDataSports = this.showsDataSports.sort((a, b) => (value === 'A-Z' ? ((a.name > b.name) ? 1 : -1) : ((b.name > a.name) ? 1 : -1)));
  }
}