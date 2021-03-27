import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';
declare var $: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  listNew: any;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.listNew = this.contentService.listNews;
  }

  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }
}
