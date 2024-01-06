import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-publication-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publication-card.component.html',
  styleUrl: './publication-card.component.css'
})
export class PublicationCardComponent {
  @Input() publication: any;
  isActive: boolean = false;

  toggleactive(): void {
    this.isActive = !this.isActive;
    console.log('Active state:', this.isActive);
  }
  };

