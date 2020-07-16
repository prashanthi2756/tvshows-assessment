import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { ShowSearchComponent } from './show-search/show-search.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { AllShowsComponent } from './all-shows/all-shows.component';

const routes: Routes =
  [
    {
      path: 'all-shows',
      component: AllShowsComponent
    },
    {
      path: 'category',
      component: ShowCategoryComponent
    },
    { path: 'show-details/:id', component: ShowDetailComponent },
    { path: 'show-search', component: ShowSearchComponent },


    { path: '', redirectTo: 'all-shows', pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
