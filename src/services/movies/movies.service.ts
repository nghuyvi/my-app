import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getListMovieNow(): Observable<any> {
    const api =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03';
    return this.httpClient.get(api).pipe(tap());
  }

  getListMovieComing(): Observable<any> {
    const api =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02';
    return this.httpClient.get(api).pipe(tap());
  }

  getDetailMovie(id: string): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim='+ id;
    return this.httpClient.get(api).pipe(tap());
  }
}
