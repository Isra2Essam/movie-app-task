import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LikesService } from 'src/app/likes/likes.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  @Input() index: number;
  @Output() deleteItem = new EventEmitter<number>();
  isLiked = false;
  isFav = false;

  constructor(private likesService: LikesService, private router: Router) {}

  ngOnInit(): void {
    this.initIsFavFlag();
    this.initIsLikedFlag();
  }

  initIsFavFlag(): void {
    const favorites = JSON.parse(localStorage.getItem('favorite'));
    if (
      favorites &&
      favorites.findIndex((item) => item.id === this.movie?.id) > -1
    ) {
      this.isFav = true;
    }
  }

  initIsLikedFlag(): void {
    const likes = this.likesService.getLikes();
    if (likes && likes.findIndex((item) => item.id === this.movie?.id) > -1) {
      this.isLiked = true;
    }
  }

  onLike(): void {
    this.likesService.likeMovie(this.movie);
    this.isLiked = true;
  }

  onUnlike(): void {
    this.likesService.unlikeMovies(this.index);
    this.isLiked = false;
  }

  onAddFavorite(): void {
    let favorites: Movie[];
    favorites = JSON.parse(localStorage.getItem('favorite'));
    if (!favorites) {
      favorites = [];
    }
    if (favorites.findIndex((item) => item.id === this.movie.id) === -1) {
      favorites.push(this.movie);
      localStorage.setItem('favorite', JSON.stringify(favorites));
      this.isFav = true;
    }
  }

  onDeleteFav(): void {
    const favorites = JSON.parse(localStorage.getItem('favorite'));
    const index = favorites.findIndex((item) => item.id === this.movie.id);
    if (index > -1) {
      favorites.splice(index, 1);
      localStorage.setItem('favorite', JSON.stringify(favorites));
      this.deleteItem.emit(favorites.id);
    }
    this.isFav = false;
  }
}
