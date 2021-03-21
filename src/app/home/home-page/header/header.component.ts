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
    { title: 'DANH SÁCH PHIM', fragment: '/home/list-movie-page' },
    { title: 'MUA VÉ', fragment: '/home/booking-pag' },
    { title: 'LIÊN HỆ', fragment: '/home/about-page' },

  ];
  active= '1';

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
