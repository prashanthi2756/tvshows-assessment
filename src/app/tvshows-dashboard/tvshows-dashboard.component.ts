import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../tvshows.service';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
@Component({
  selector: 'app-tvshows-dashboard',
  templateUrl: './tvshows-dashboard.component.html',
  styleUrls: ['./tvshows-dashboard.component.scss']
})
export class TvshowsDashboardComponent implements OnInit {
  data: any[];
  pageNum = 1;
  showsDataDrama: any[];
  showsDataSports: any[];
  showsDataComedy: any[];
  showStatus: FormControl;
  showRating: FormControl;
  sortBy: FormControl;
  myform: FormGroup;
  constructor(
    private tvshowsService: TvshowsService,
  ) { }

  ngOnInit() {
    this.showRating = new FormControl();
    this.showStatus = new FormControl();
    this.sortBy = new FormControl();
    this.loadData();
  }
  loadData() {
    this.tvshowsService.getShowList().subscribe((data: any) => {
      this.data = data;
      this.genreData();
    });
  }
  genreData() {
    this.showsDataDrama = this.data.filter(item => (item.genres.indexOf('Drama') >= 0))
    this.showsDataComedy = this.data.filter(item => (item.genres.indexOf('Comedy') >= 0))
    this.showsDataSports = this.data.filter(item => (item.genres.indexOf('Sports') >= 0))
  }
  ratingChange(value: any) {
    this.genreData();
    this.showsDataDrama = this.showsDataDrama.filter(item => item.rating.average >= value)
    this.showsDataComedy = this.showsDataComedy.filter(item => item.rating.average >= value)
    this.showsDataSports = this.showsDataSports.filter(item => item.rating.average >= value)
    this.showStatus.setValue('');
  }
  statusChange(status: any) {
    this.genreData();
    this.showsDataDrama = this.showsDataDrama.filter(item => item.status === status)
    this.showsDataComedy = this.showsDataComedy.filter(item => item.status === status)
    this.showsDataSports = this.showsDataSports.filter(item => item.status === status)
    this.showRating.setValue('');
  }
  sortChange(value) {
    this.showsDataDrama = this.showsDataDrama.sort((a, b) => (a[name].toLowerCase().localeCompare(b[name].toLowerCase())))
  }
}