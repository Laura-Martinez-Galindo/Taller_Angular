import { Component, OnInit } from '@angular/core';
import {Serie} from '../serie';
import { dataSeries } from '../data';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.html',
  styleUrl: './serie-list.css',
})
export class SerieList {
  series: Array<Serie> = [];
  constructor(){}
  ngOnInit(){
    this.series = this.getSeriesList();
  }

  getSeriesList(): Array<Serie> {
    return dataSeries;
  }

}
