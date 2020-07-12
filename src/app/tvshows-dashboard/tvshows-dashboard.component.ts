import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../tvshows.service';
import { HttpClient } from '@angular/common/http';
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
  constructor(
    private tvshowsService: TvshowsService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.tvshowsService.getShowList().subscribe((data: any) => {
      this.showsDataDrama = data.filter(item => item.genres.indexOf('Drama') >= 0);
      this.showsDataComedy = data.filter(item => item.genres.indexOf('Comedy') >= 0);
      this.showsDataSports = data.filter(item => item.genres.indexOf('Sports') >= 0);
      // this.data = data.sort((a, b) => b.weight - a.weight)
    });
  }

}
