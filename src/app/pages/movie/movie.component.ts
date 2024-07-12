import { Component, input, InputSignal, OnInit } from '@angular/core';
import { MovieFormComponent } from './_partials/movie-form/movie-form.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  standalone: true,
  imports: [MovieFormComponent],
})
export class MovieComponent implements OnInit {
  movieId = input<string | null>(null, { alias: 'id' });
  movie = input<{ title: string; description: string } | null>(null);
  categorie = input<string | null>(null);

  ngOnInit() {
    // Here u get the movieId value
    console.info('movieId: ', this.movieId());
    console.info('categorie: ', this.categorie());
    console.info('movie: ', this.movie());
  }
}
