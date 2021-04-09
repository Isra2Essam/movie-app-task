import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies: Movie[] ;

  constructor(private http:HttpClient) { }

  fetchTopRatedMovies(){
    return this.http.get<Movie[]>('https://api.themoviedb.org/3/movie/top_rated?api_key=33a68e213419740b84e8e8d38b840d87');
  }

  fetchUpcomingMovies(){
    return this.http.get<Movie>('https://api.themoviedb.org/3/movie/upcoming?api_key=33a68e213419740b84e8e8d38b840d87')
  }

  fetchNowplayingMovies(){
    return this.http.get<Movie>('https://api.themoviedb.org/3/movie/now_playing?api_key=33a68e213419740b84e8e8d38b840d87')
  }
  
  fetchMovieDescription(id:number){
    return this.http.get<Movie>('https://api.themoviedb.org/3/movie/'+id+'?api_key=33a68e213419740b84e8e8d38b840d87')
  }
}
