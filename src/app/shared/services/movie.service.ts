// import { Injectable, inject} from '@angular/core';
// import { HttpClient } from '@angular/common/http'

// const options = {
//   params: {
//     include_adult: 'false',
//     include_video: 'true',
//     language: 'en-US',
//     page: '1',
//     sort_by: 'popularity.desc'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'ef989756e9msh1e537554365c7bbp1bb019jsn6c92a5ca1e3c',
//     'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
//   }
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class MovieService {

//  http = inject(HttpClient);

//  getMovies() {
//   return this.http.get<any>('https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle//${encodeURIComponent(title)}/', options)
// }

// getTvShows() {
//   return this.http.get('https://api.themoviedb.org/3/discover/tv', options)
// }

// getRatedMovies() {
//   return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options)
// }

// getBannerImage(id: number) {
//   return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
// }

// getBannerVideo(id: number) {
//   return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
// }

// getBannerDetail(id: number) {
//   return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
// }

// getNowPlayingMovies() {
//   return this.http.get('https://api.themoviedb.org/3/movie/now_playing', options)
// }

// getPopularMovies() {
//   return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
// }

// getTopRated() {
//   return this.http.get('https://api.themoviedb.org/3/movie/top_rated', options)
// }

// getUpcomingMovies() {
//   return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
// }
// }


import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get('assets/movies.json');
  }
}
