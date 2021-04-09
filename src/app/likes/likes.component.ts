import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';
import { LikesService } from './likes.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css'],
})
export class LikesComponent implements OnInit {
  isEmpty = false;
  liked: Movie[];
  constructor(private likesService: LikesService) {}

  ngOnInit(): void {
    this.liked = this.likesService.getLikes();
    console.log(this.liked);
    this.handleEmptyState();
    
  }
  handleEmptyState() {
    if (this.liked && this.liked.length) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }
}
