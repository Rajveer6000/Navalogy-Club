import { Routes } from '@angular/router';
import { NavalogypageComponent } from './pages/navalogypage/navalogypage.component';
import { PublicationComponent } from './pages/publication/publication.component';
import { Page404Component } from './pages/page-404/page-404.component';
import { PortfolioDetailsComponent } from './pages/portfolio-details/portfolio-details.component';

export const routes: Routes = [
    { path: '', component: NavalogypageComponent },
    { path: 'publication', component: PublicationComponent },
    { path: '404', component: Page404Component },
    { path: 'portfolio_details', component: PortfolioDetailsComponent }
];
