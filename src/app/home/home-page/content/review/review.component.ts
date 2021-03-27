import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';
declare var $: any;

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit, AfterViewInit {
  listReview: any;

  constructor(private ContentService: ContentService) {}

  ngOnInit(): void {
    this.listReview = this.ContentService.listReview;
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
