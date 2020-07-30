import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvshowsService } from '../services/tvshows.service';
import { Location } from '@angular/common';
import { TvShow } from '../tv-show-interface';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {
  data: TvShow[];
  id: any;
  hasError = false;
  message: string;
  constructor(
    private route: ActivatedRoute,
    private tvshowsService: TvshowsService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.loadData();
  }
  public loadData(): void {
    this.tvshowsService.getShowDetail(this.id).subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        this.message = error.message;
        this.hasError = true;
      },
    );
  }
  naviagteToPreviousPage(): void {
    this.location.back();
  }
}
