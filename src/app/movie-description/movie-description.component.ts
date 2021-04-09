import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css'],
})
export class MovieDescriptionComponent implements OnInit {
  movie: Movie;
  movieId;
  newComment = '';
  isEmpty = false;
  commentsList = [];

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieId = id;
    this.getMovieDetails(id);
    this.getMovieComments(id);
  }

  handleEmptyState(): void {
    if (this.movie) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }

  getMovieDetails(id): void {
    this.moviesService.fetchMovieDescription(id).subscribe((data: any) => {
      this.movie = data;
      this.handleEmptyState();
      console.log(this.movie);
    });
  }

  getMovieComments(id): void {
    const movieComments = localStorage.getItem('movie' + id + 'comments');
    if (movieComments) {
      this.commentsList = [];
      this.commentsList = JSON.parse(movieComments);
    }
  }

  addComment(): void {
    if (this.newComment.trim()) {
      this.commentsList.push(this.newComment);
      localStorage.setItem(
        'movie' + this.movieId + 'comments',
        JSON.stringify(this.commentsList)
      );
      this.newComment = '';
    }
  }
}
