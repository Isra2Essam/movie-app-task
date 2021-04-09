# movie-app-task

This app is broken down into several components, which are:
1- Authentication component that handles signing in and signing up using authentication guard to only allow signed in users  to route through the app.

2- Header Component to route through home, upcoming movies, now playing movies, favorites, and ikes components.

3- Movies card component to view the movie include it's action buttons(ike, comment, add to favorite), it's common between all components to view movie.

4- Home component to show top rated movies.

5- Upcoming component to show upcoming movies.

6- Now playing movies to show now playing movies.

7- Favorites component to show all movies user adds to favorites.User can delete movies from favorites.

8- Likes component to show all movies user likes. User can unlike movies.

9- Movie description component to show movie details.

Notes:
- I used bootstrap framework.
- I used model for movie's image, title,id and description.
- I used firebase as a backend for authentication.
- I used local storage to add/remove movies to favorites and to add comments.
- I used service to like/unlike movies.
- I used TheMovieDB apis to show top rated, upcoming, now playing movies and a description for each movie. 
- Top rated movies API: 'https://api.themoviedb.org/3/movie/top_rated?api_key=33a68e213419740b84e8e8d38b840d87'.
- Upcoming movies API: 'https://api.themoviedb.org/3/movie/upcoming?api_key=33a68e213419740b84e8e8d38b840d87'.
- Nowplaying movies API: 'https://api.themoviedb.org/3/movie/now_playing?api_key=33a68e213419740b84e8e8d38b840d87'.
- Image API 'https://image.tmdb.org/t/p/w500'+movie?.poster_path.

Enhancements:
- Moving the api key handling to an interceptor.
- Moving apis base Url to a common util or a service.
- Create modules for each tab to apply modular lazy loading.
- Add infinite scroller for movies listing.
- Create better empty states.
