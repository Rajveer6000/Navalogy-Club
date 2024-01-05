import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
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
  homepage(): void {
    document.getElementById("homepage")?.scrollIntoView({ behavior: "smooth" });
  }
  aboutpage(): void {
    document.getElementById("aboutuspage")?.scrollIntoView({ behavior: "smooth" });
  }
  publicationspage(): void {
    document.getElementById("publicationspage")?.scrollIntoView({ behavior: "smooth" });
  }
  portfoliopage(): void {
    document.getElementById("portfoliopage")?.scrollIntoView({ behavior: "smooth" });
  }
  teampage(): void {
    document.getElementById("teampage")?.scrollIntoView({ behavior: "smooth" });
  }
  contactuspage(): void {
    document.getElementById("contactuspage")?.scrollIntoView({ behavior: "smooth" });
  }
}
