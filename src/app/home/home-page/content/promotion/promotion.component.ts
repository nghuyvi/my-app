import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';
declare var $: any;

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements OnInit, AfterViewInit {
  listPromotion: any;

  constructor(private contetentService: ContentService) {}

  ngOnInit(): void {
    this.listPromotion = this.contetentService.listPromotion;
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
