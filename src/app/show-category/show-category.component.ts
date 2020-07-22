import { Component, OnInit, Input } from '@angular/core';
import { TvshowsService } from '../services/tvshows.service';
import {
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { groupBy } from 'lodash';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.scss']
})
export class ShowCategoryComponent implements OnInit {
  @Input() allShows;
  data: any = [];
  allShowsData: any = [];
  showsDataCategory: any = [];
  searchResults: any = [];
  categoryKeys: any = [];
  searchInput: string;
  showStatus: string;
  showRating: string;
  sortBy: string;
  ratingArray: any = [];
  showsForm = new FormGroup({
    showStatus: new FormControl(),
    showRating: new FormControl(),
    sortBy: new FormControl()
  });
  constructor(
    private tvshowsService: TvshowsService,
    private fb: FormBuilder,

  ) { }

  public ngOnInit(): void {
    this.showsForm = this.fb.group({
      showStatus: '',
      showRating: '',
      sortBy: ''
    });
    this.loadData();
    for (let i = 0; i <= 7; i++) {
      this.ratingArray.push(9 - i);
    }
  }
  public loadData(): void {
    this.tvshowsService.getShowList().subscribe((data: any[]) => {
      this.data = data.sort((a, b) => a.rating.average > b.rating.average ? -1 : 1);
      this.showsDataCategory = groupBy((data), item => item.genres);
      this.categoryKeys = Object.keys(this.showsDataCategory);
      this.genreData();
    });
  }
  public genreData(): void {
    this.showStatus = this.showsForm.controls.showStatus.value;
    this.showRating = this.showsForm.controls.showRating.value;
    this.sortBy = this.showsForm.controls.sortBy.value;
    this.allShowsData = this.data.filter(item =>
      (this.showStatus ? (item.status === this.showStatus && item.rating.average >= this.showRating)
        : item.rating.average >= this.showRating));
    this.allShowsData = this.allShowsData.sort((a, b) =>
      (this.sortBy === 'A-Z' ? ((a.name > b.name) ? 1 : -1) :
        ((b.name > a.name) ? 1 : -1)));
  }
}
