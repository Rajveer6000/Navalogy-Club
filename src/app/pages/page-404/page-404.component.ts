import { Component } from '@angular/core';
import { NavBarComponent } from '../../component/nav-bar/nav-bar.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-page-404',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './page-404.component.html',
  styleUrl: './page-404.component.css'
})
export class Page404Component {

}
