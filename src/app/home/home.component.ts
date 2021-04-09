import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.fetchTopRatedMovies().subscribe((data:any) => {
      this.movies = data.results;
    });
  };

}
