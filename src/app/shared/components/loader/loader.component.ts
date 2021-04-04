import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  color = 'pink';
  mode = 'indeterminate';
  value = 50;
  isLoading = this.loaderSV.isLoading;
  constructor(private loaderSV: LoaderService) { }

  ngOnInit(): void {
  }

}
