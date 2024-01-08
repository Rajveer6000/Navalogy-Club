import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioItemComponent } from '../portfolio-item/portfolio-item.component';
export interface cards {
  imagepath: string,
  title: string,
  short_description: string,
  id: string,
  type: string,
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PortfolioItemComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  card(): cards[] {
    return [
      {
        id: '1',
        type: 'SDN',
        title: 'Dynamic Network Orchestrator',
        short_description: `The Dynamic Network Orchestrator is a Software-Defined Networking (SDN) solution that redefines network management.`,
        imagepath: './../../../assets/photos/AT_OVS.png',
      },
      {
        id: '2',
        type: "Cloud/Fog",
        title: `Smart Cloud Hub`,
        short_description: `The Smart Cloud Hub is a groundbreaking project that leverages cloud and fog computing to enhance data processing and storage capabilities. `,

        imagepath: './../../../assets/photos/fog.png',
      },
      {
        id: '3',
        type: "Hardware",
        title: `Smart Wearable Health Monitor`,
        short_description: `The Smart Wearable Health Monitor is an advanced hardware project designed to provide real-time health tracking and monitoring.`,
        imagepath: './../../../assets/photos/full_glove.png',
      },
    ]
  }
}
