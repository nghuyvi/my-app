import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/services/movies/movies.service';

@Component({
  selector: 'app-list-phim-sap-chieu',
  templateUrl: './list-phim-sap-chieu.component.html',
  styleUrls: ['./list-phim-sap-chieu.component.scss'],
})
export class ListPhimSapChieuComponent implements OnInit {
  listMovieComing!: any[];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getListMovieComing().subscribe((phim) => {
      this.listMovieComing = phim;
      console.log(this.listMovieComing);
    });
  }
}