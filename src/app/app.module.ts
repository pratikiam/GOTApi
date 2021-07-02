import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { CharectersComponent } from './components/charecters/charecters.component';
import { HousesComponent } from './components/houses/houses.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SwiperModule } from 'swiper/angular';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const appRouting: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'char', component: CharViewComponent },
  { path: 'book', component: BooksComponent },
  // { path: 'house', component: HouseComponent },
  // { path: 'view-book/:id', component: BookInfoComponent },
  // { path: 'characetr/:id', component: CharInfoComponent },
  // { path: 'view-house/:id', component: HouseViewComponent }

]





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    BooksComponent,
    CharectersComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting),
    AppRoutingModule,
    SlickCarouselModule,
    SwiperModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
