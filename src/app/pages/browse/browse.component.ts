import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { BannerComponent } from 'src/app/core/components/banner/banner.component';
import { MovieService } from 'src/app/shared/services/movie.service';
import { MovieCarouselComponent } from 'src/app/shared/components/movie-carousel/movie-carousel.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, MovieCarouselComponent],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {


auth = inject(AuthService);
movieService = inject(MovieService);

name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;


// popularMovies: IVideoContent[]=[];
ngOnInit(): void {
    this.movieService.getMovies().subscribe(res=>{
      console.log(res);
      // this.popularMovies = res.results;
    })
}

signOut() {
  sessionStorage.removeItem("loggedInUser");
  this.auth.signOut();
}
}
