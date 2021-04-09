import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isLoading = this.loaderSV.isLoading;
  constructor(private loaderSV: LoaderService) { }

  ngOnInit(): void {
  }

}
