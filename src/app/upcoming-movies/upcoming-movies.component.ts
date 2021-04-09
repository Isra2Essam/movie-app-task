import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {

  movies;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.fetchUpcomingMovies().subscribe((data:any) => {
      this.movies = data.results;
    });
  };
}
