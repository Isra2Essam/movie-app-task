import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favs: Movie[];
  isEmpty = false;
  constructor() {}

  ngOnInit(): void {
    this.favs = JSON.parse(
      localStorage.getItem('favorite')
    );
    this.handleEmptyState();
    console.log(this.favs);
  }
  handleEmptyState() {
    if (this.favs && this.favs.length) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }
  onDelete(id: number) {
    this.favs = JSON.parse(
      localStorage.getItem('favorite')
    );
  }
}
