import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { TeamCardComponent } from './component/team-card/team-card.component';
import { TeamComponent } from './component/team/team.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { HomeComponent } from './component/home/home.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { PublicationsComponent } from './component/publications/publications.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { PortfolioItemComponent } from './component/portfolio-item/portfolio-item.component';
import { Page404Component } from './pages/page-404/page-404.component';
import { ScrolltopComponent } from './component/scrolltop/scrolltop.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { PublicationCardComponent } from './component/publication-card/publication-card.component';
import { NavalogypageComponent } from './pages/navalogypage/navalogypage.component';
import { PublicationComponent } from './pages/publication/publication.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, ToastrModule, RouterOutlet, NavBarComponent, GalleryComponent, FooterComponent, HomeComponent, TeamCardComponent, TeamComponent, AboutusComponent,
    PortfolioComponent, ScrolltopComponent, RouterLink, NavalogypageComponent, PublicationComponent, FormsModule, PublicationCardComponent, PublicationsComponent, ContactusComponent, PortfolioItemComponent, Page404Component, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(private router: Router) { }
  gotopage(pagename: string): void {
    this.router.navigate([`${pagename}`]);
  }
}
