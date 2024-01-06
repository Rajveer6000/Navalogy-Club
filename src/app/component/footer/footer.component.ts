import { Component } from '@angular/core';
import { Page404Component } from '../../pages/page-404/page-404.component';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Page404Component],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) { }

  gotopage(pagename: string, id: string): void {
    this.router.navigate([`${pagename}`]);
    setTimeout(() => {
      console.log("This message will be displayed after a delay");
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
