import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-list-phim-sap-chieu',
  templateUrl: './list-phim-sap-chieu.component.html',
  styleUrls: ['./list-phim-sap-chieu.component.scss'],
})
export class ListPhimSapChieuComponent implements OnInit {
  listMovieComing!: any[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    autoplay: true,
    autoplayTimeout:3000,
    autoplaySpeed:1000,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: false
  }

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getListMovieComing().subscribe((phim) => {
      this.listMovieComing = phim;
      console.log(this.listMovieComing);
    });
  }
}
