import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LikesComponent } from './likes/likes.component';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { NowPlayingMoviesComponent } from './now-playing-movies/now-playing-movies.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    FavoritesComponent,
    LikesComponent,
    HomeComponent,
    MovieCardComponent,
    UpcomingMoviesComponent,
    NowPlayingMoviesComponent,
    MovieDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
