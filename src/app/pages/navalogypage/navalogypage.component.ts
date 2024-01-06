import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { NavBarComponent } from '../../component/nav-bar/nav-bar.component';
import { PublicationCardComponent } from '../../component/publication-card/publication-card.component';
import { PublicationsComponent } from '../../component/publications/publications.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { AboutusComponent } from '../../component/aboutus/aboutus.component';
import { ContactusComponent } from '../../component/contactus/contactus.component';
import { PortfolioComponent } from '../../component/portfolio/portfolio.component';
import { PortfolioItemComponent } from '../../component/portfolio-item/portfolio-item.component';
import { HomeComponent } from '../../component/home/home.component';
import { TeamCardComponent } from '../../component/team-card/team-card.component';
import { TeamComponent } from '../../component/team/team.component';
import { ScrolltopComponent } from '../../component/scrolltop/scrolltop.component';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navalogypage',
  standalone: true,
  imports: [AppComponent,NavBarComponent,PublicationCardComponent,PublicationsComponent,FooterComponent,AboutusComponent,ContactusComponent,PortfolioComponent,PortfolioItemComponent,HomeComponent,TeamCardComponent,TeamComponent,ScrolltopComponent],
  templateUrl: './navalogypage.component.html',
  styleUrl: './navalogypage.component.css'
})
export class NavalogypageComponent {
  constructor(private router: Router) { }
  gotopage(pagename: string): void {
    this.router.navigate([`${pagename}`]);
  }
}
