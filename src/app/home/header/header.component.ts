import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed = true;

  links = [
    { title: 'TRANG CHỦ', fragment: '/' },
    { title: 'DANH SÁCH PHIM', fragment: '/list-movie-page' },
    { title: 'MUA VÉ', fragment: '/booking-page' },
    { title: 'LIÊN HỆ', fragment: '/about-page' },

  ];
  active= '1';

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
