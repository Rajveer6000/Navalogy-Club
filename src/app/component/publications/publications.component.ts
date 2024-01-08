import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {
   constructor(private router: Router) { }
  gotopage(pagename: string): void {
    this.router.navigate([`${pagename}`]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  first(): void {
    let a = document.getElementById("01");
    if (a?.classList.contains("activeclass"))

      a?.classList.remove('activeclass');
    else
      a?.classList.add('activeclass');
  };
  second(): void {
    let a = document.getElementById("02");
    if (a?.classList.contains("activeclass"))

      a?.classList.remove('activeclass');
    else
      a?.classList.add('activeclass');
  };

  third(): void {
    let a = document.getElementById("03");
    if (a?.classList.contains("activeclass"))

      a?.classList.remove('activeclass');
    else
      a?.classList.add('activeclass');
  };

  forth(): void {
    let a = document.getElementById("04");
    if (a?.classList.contains("activeclass"))

      a?.classList.remove('activeclass');
    else
      a?.classList.add('activeclass');
  };

}
