import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input({required: true}) userImg: string='';
  navList = ["home", "Tv Shows", "News & Popular", "My List", "Browse by Language"]
}
