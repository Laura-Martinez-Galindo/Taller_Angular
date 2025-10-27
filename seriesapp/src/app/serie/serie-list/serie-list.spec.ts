import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';
import { map } from 'rxjs/operators';

interface SerieJson {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  webpage: string;
  poster: string;
}

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.html',
  styleUrls: ['./serie-list.css'], // arreglado
})
export class SerieList implements OnInit {
  series: Serie[] = [];
  promedioTemporadas: number = 0;
  serieSeleccionada: Serie | null = null;

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getSeries().subscribe((data: SerieJson[]) => {
      this.series = data.map(s => new Serie(
        s.id,
        s.name,
        s.channel,
        s.seasons,
        s.poster,
        s.description,
        s.webpage
      ));
      this.calcularPromedio();
    });
  }

  calcularPromedio(): void {
    if (this.series.length === 0) {
      this.promedioTemporadas = 0;
      return;
    }
    let total = 0;
    for (let s of this.series) {
      total += s.temporadas;
    }
    this.promedioTemporadas = total / this.series.length;
  }

  mostrarSerieCard(serie: Serie): void {
    this.serieSeleccionada = serie;
  }

  trackById(index: number, s: Serie): number {
    return s.id;
  }
}
