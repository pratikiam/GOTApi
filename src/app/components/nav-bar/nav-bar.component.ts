import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, {  Navigation,Pagination,Scrollbar,  A11y,  Swiper,} from 'swiper/core';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

 
}
