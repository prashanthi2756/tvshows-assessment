import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvshowsDashboardComponent } from './tvshows-dashboard/tvshows-dashboard.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';

const routes: Routes =
  [
    { path: '', component: TvshowsDashboardComponent, pathMatch: 'full' },
    { path: 'show-details/:id', component: ShowDetailComponent },
    { path: '**', component: ShowDetailComponent }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
