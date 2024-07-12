import { Routes } from '@angular/router';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieComponent } from './pages/movie/movie.component';

export const routes: Routes = [
  {
    path: 'movie-list',
    component: MovieListComponent,
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
    data: {
      categorie: 'Pokemon',
    },
    resolve: {
      movie: () => ({
        title: 'Pokémon, le film : Mewtwo contre-attaque',
        description: '⚡🐹⚡',
      }),
    },
  },
];
