import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { LikesComponent } from './likes/likes.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { NowPlayingMoviesComponent } from './now-playing-movies/now-playing-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'likes', component: LikesComponent, canActivate: [AuthGuard] },
  { path: 'upcoming-movies', component: UpcomingMoviesComponent, canActivate: [AuthGuard] },
  { path: 'now-playing-movies', component: NowPlayingMoviesComponent, canActivate: [AuthGuard] },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: 'movie-description/:id', component: MovieDescriptionComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
