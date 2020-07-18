import { Component, OnInit } from '@angular/core';
import { ShowSearchService } from '../show-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchValue:string;
  constructor(private showSearchService: ShowSearchService,private router :Router) { }

  ngOnInit(): void {
  }
  search(val: any) {
    this.showSearchService.getSearchResults(val);
    this.router.navigate(['show-search']);
    this.searchValue = '';
  }
}
