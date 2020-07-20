import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule, FormsModule,
} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { ShowListTemplateComponent } from './show-list-template/show-list-template.component';
import { HeaderComponent } from './header/header.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { ShowSearchComponent } from './show-search/show-search.component';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ShowDetailComponent,
    HeaderComponent,
    ShowListTemplateComponent,
    ShowCategoryComponent,
    AllShowsComponent,
    ShowSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpClientModule,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
