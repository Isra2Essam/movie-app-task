import { Injectable } from '@angular/core';
import { Movie } from '../movie.model';

@Injectable({
  providedIn: 'root',
})
export class LikesService {
  likedMovie: Movie[] = [];

  constructor() {}

  likeMovie(liked: Movie): void {
    this.likedMovie.push(liked);
  }

  unlikeMovies(index: number): void {
    this.likedMovie.splice(index, 1);
  }

  getLikes(): Movie[] {
    if (this.likedMovie) {
      return this.likedMovie;
    }
  }
}
