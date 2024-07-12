import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  standalone: true,
})
export class MovieFormComponent implements OnInit {
  movieId = input<string | null>(null);

  ngOnInit() {
    // console.info('Movie Form -- movieId: ', this.movieId());
  }
}
