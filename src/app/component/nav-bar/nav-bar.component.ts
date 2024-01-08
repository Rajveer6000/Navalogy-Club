import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router) { }

  isMobileMenuOpen = false;
  title = "Navalogy Club";

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    let btn = document.getElementById("mobilenavbar");
    if (event.target == btn) {
      return;
    }
    if (this.isMobileMenuOpen = true) {
      this.isMobileMenuOpen = false
    }
  }

  
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  gotopage(pagename: string, id: string): void {
    this.router.navigate([`${pagename}`]);
    setTimeout(() => {
      document.getElementById(`${id}`)?.scrollIntoView({ behavior: "smooth" });
    }, 100);

  }
  homepage(): void {
    this.gotopage('', "homepage");
  }
  aboutpage(): void {
    this.gotopage('', "aboutuspage");
  }
  publicationspage(): void {
    this.gotopage('publication', "publicationspage");
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }
  portfoliopage(): void {
    this.gotopage('', "portfoliopage");
  }
  teampage(): void {
    this.gotopage('', "teampage");
  }
  contactuspage(): void {
    this.gotopage('', "contactuspage");
  }
}
