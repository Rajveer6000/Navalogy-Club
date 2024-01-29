import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.css'
})
export class PortfolioItemComponent {
  @Input() card: any;

  constructor(private router: Router) { }

  gotopage(pagename: string, id: string): void {
    this.router.navigate([`${pagename}`]);
    setTimeout(() => {
      document.getElementById(`${id}`)?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
    console.log(id)
  }
}
