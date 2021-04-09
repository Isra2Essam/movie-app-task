import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.css']
})
export class NowPlayingMoviesComponent implements OnInit {

  movies;

  constructor(private moviesService :MoviesService){}
  
  ngOnInit(): void {
    this.moviesService.fetchNowplayingMovies().subscribe((data:any) => {
      this.movies = data.results;
    });

}}
