import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvshowsService } from '../tvshows.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {
  data: any;
  id: any;
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
  loadData() {
    this.tvshowsService.getShowDetail(this.id).subscribe(
      (data) => {
        this.data = data;
    });
  }
  public naviagteToPreviousPage(): void {
    this.location.back();
  }
}
