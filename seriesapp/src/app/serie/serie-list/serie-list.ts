import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.html',
  styleUrls: ['./serie-list.css'],
  standalone: false,
})
export class SerieListComponent implements OnInit {
  series: Serie[] = [];
  promedioTemporadas: number = 0;
  serieSeleccionada: Serie | null = null;

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getSeries().subscribe(data => {
      this.series = data.map(s => new Serie(
        s.id,
        s.name,
        s.channel,
        s.seasons,
        s.description,
        s.webpage,
        s.poster
      ));
      this.calcularPromedio();
    });
  }

  calcularPromedio(): void {
    if (!this.series.length) {
      this.promedioTemporadas = 0;
      return;
    }
    const total = this.series.reduce((acc, s) => acc + s.temporadas, 0);
    this.promedioTemporadas = total / this.series.length;
  }

  mostrarSerieCard(serie: Serie): void {
    this.serieSeleccionada = serie;
  }

  trackById(index: number, s: Serie) {
    return s.id;
  }
}
