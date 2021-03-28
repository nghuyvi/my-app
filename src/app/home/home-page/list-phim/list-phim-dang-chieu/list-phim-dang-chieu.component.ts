import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-list-phim-dang-chieu',
  templateUrl: './list-phim-dang-chieu.component.html',
  styleUrls: ['./list-phim-dang-chieu.component.scss'],
})
export class ListPhimDangChieuComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
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
    nav: false,
  };

  listMovieNow!: any[];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getListMovieNow().subscribe((phim) => {
      this.listMovieNow = phim;
      console.log(this.listMovieNow);
    });
  }
}
