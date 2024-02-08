import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
import { MovieService } from 'src/app/shared/services/movie.service';




interface Movie {
  img: string;
  title: string;
  description: string;
};

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MovieCarouselComponent implements OnInit {
  popularMovies: any[] = [];
  horrorMovies: any[] = [];
  thrillerMovies: any[] = [];
  defaultTransform: number = 0;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    // this.movieService.getMovies().subscribe((data) => {
    //   this.jsonData = data;
    // });

    // popular movie
    this.movieService.getMovies().subscribe(
      (data: any) => {
        this.popularMovies = data.movies.popular;
      },
      (error) => {
        console.error('Error fetching popular movies:', error);
      }
    );
 // horror movie
    this.movieService.getMovies().subscribe(
      (data: any) => {
        this.horrorMovies = data.movies.horror;
      },
      (error) => {
        console.error('Error fetching horror movies:', error);
      }
    );
     // thrillerMovies
     this.movieService.getMovies().subscribe(
      (data: any) => {
        this.thrillerMovies = data.movies.thriller;
      },
      (error) => {
        console.error('Error fetching thriller movies:', error);
      }
    );




    // You can access the native DOM element using this.slider.nativeElement
    const next = document.getElementById("next");
    if (next) {
      next.addEventListener("click", () => this.goNext('popular')); // assuming popular category
    }

    const prev = document.getElementById("prev");
    if (prev) {
      prev.addEventListener("click", () => this.goPrev('popular'));
    }

    const nextHorror = document.getElementById("next-horror");
    if (nextHorror) {
      nextHorror.addEventListener("click", () => this.goNext('horror'));
    }

    const prevHorror = document.getElementById("prev-horror");
    if (prevHorror) {
      prevHorror.addEventListener("click", () => this.goPrev('horror'));
    }

    const nextOn = document.getElementById("next-on");
    if (nextOn) {
      nextOn.addEventListener("click", () => this.goNext('onnetflix'));
    }

    const prevOn = document.getElementById("prev-on");
    if (prevOn) {
      prevOn.addEventListener("click", () => this.goPrev('onnetflix'));
    }
  }

  goNext(category: string) {
    this.defaultTransform = this.defaultTransform - 398;
    const sliderId = `slider-${category}`;
    const slider = document.getElementById(sliderId) as HTMLElement | null;

    if (slider) {
      if (Math.abs(this.defaultTransform) >= slider.scrollWidth / 1.7) {
        this.defaultTransform = 0;
      }
      slider.style.transform = `translateX(${this.defaultTransform}px)`;
    }
  }

  goPrev(category: string) {
    const sliderId = `slider-${category}`;
    const slider = document.getElementById(sliderId) as HTMLElement | null;

    if (slider) {
      if (Math.abs(this.defaultTransform) === 0) {
        this.defaultTransform = 0;
      } else {
        this.defaultTransform = this.defaultTransform + 398;
      }
      slider.style.transform = `translateX(${this.defaultTransform}px)`;
    }
  }

}
