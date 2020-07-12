import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvshowsService } from '../tvshows.service';


@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {
  id: any;
  data: any;
  constructor(
    private route: ActivatedRoute,
    private tvshowsService: TvshowsService

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
}
