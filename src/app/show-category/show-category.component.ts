import { Component, OnInit, Input } from '@angular/core';
import { TvshowsService } from '../tvshows.service';
import {
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { ShowSearchService } from '../show-search.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.scss']
})
export class ShowCategoryComponent implements OnInit {
  @Input() allShows;
  data: any[] = [];
  allShowsData: any[] = [];
  showsDataDrama: any[] = [];
  showsDataSports: any[] = [];
  showsDataComedy: any[] = [];
  searchResults: any[] = [];
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
  }
  loadData() {
    this.tvshowsService.getShowList().subscribe((data: any) => {
      this.data = data;
      this.showsDataDrama = this.data.filter(item => item.genres.indexOf('Drama') >= 0);
      this.showsDataComedy = this.data.filter(item => item.genres.indexOf('Comedy') >= 0);
      this.showsDataSports = this.data.filter(item => item.genres.indexOf('Sports') >= 0);
      this.genreData();
    });
  }
  genreData() {
    this.showStatus = this.showsForm.controls['showStatus'].value;
    this.showRating = this.showsForm.controls['showRating'].value;
    this.sortBy = this.showsForm.controls['sortBy'].value;
    this.allShowsData = this.data.filter(item => (this.showStatus  ? (item.status === this.showStatus  && item.rating.average >= this.showRating) : item.rating.average >= this.showRating ));
    this.allShowsData = this.allShowsData.sort((a, b) => (this.sortBy === 'A-Z' ? ((a.name > b.name) ? 1 : -1) : ((b.name > a.name) ? 1 : -1)));
  }
}