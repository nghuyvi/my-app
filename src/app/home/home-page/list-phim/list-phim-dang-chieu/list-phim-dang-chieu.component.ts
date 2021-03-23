import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/services/movies/movies.service';

@Component({
  selector: 'app-list-phim-dang-chieu',
  templateUrl: './list-phim-dang-chieu.component.html',
  styleUrls: ['./list-phim-dang-chieu.component.scss']
})
export class ListPhimDangChieuComponent implements OnInit {

  listMovieNow!: any[];

  listMovieNowTest = [
    {
      hinhAnh: 'assets/img/slide/carousel_01.jpg'
    },
    {
      hinhAnh: 'assets/img/slide/carousel_02.jpg'
    },
    {
      hinhAnh: 'assets/img/slide/carousel_03.jpg'
    },
    {
      hinhAnh: 'assets/img/slide/carousel_04.jpg'
    },
    {
      hinhAnh: 'assets/img/slide/carousel_01.jpg'
    },
    {
      hinhAnh: 'assets/img/slide/carousel_02.jpg'
    },
    {
      hinhAnh: 'assets/img/slide/carousel_03.jpg'
    },
    {
      hinhAnh: 'assets/img/slide/carousel_04.jpg'
    }
  ]

  constructor( private movieService: MoviesService) { }

  ngOnInit(): void {

    this.movieService.getListMovieNow().subscribe((phim) => {
      this.listMovieNow = phim;
      console.log(this.listMovieNow)
    })

  }

}
