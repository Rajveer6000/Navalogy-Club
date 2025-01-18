import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from '../team-card/team-card.component';

export interface TeamMember {
  name: string;
  path: string;
  Designation: string;
  LinkedInlink: string;
  GitHublink: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, TeamCardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  getMentor(): TeamMember[] {
    return [
      {
        name: 'Dr. Nabajyoti Medhi',
        path: './../../../assets/photos/team/Profile.jpeg',
        Designation: 'Assistant Professor | Tezpur University',
        LinkedInlink: 'https://scholar.google.com/citations?user=Qq6XheAAAAAJ&hl=en',
        GitHublink: '#',
      },
    ];
  }

  getCurrentScholars(): TeamMember[] {
    return [
      {
        name: 'Birlang Bargayary',
        path: './../../../assets/photos/team/birlang.jfif',
        Designation: 'PhD Scholar | Tezpur University',
        LinkedInlink: 'https://scholar.google.com/citations?user=Qq6XheAAAAAJ&hl=en',
        GitHublink: '#',
      },
      {
        name: 'Priyanka Bardoloi',
        path: './../../../assets/photos/team/priyanka.jpg',
        Designation: 'PhD Scholar | Tezpur University ',
        LinkedInlink: 'https://scholar.google.com/citations?user=Qq6XheAAAAAJ&hl=en',
        GitHublink: '#',
      },
    ];
  }

  getCurrentmembers(): TeamMember[] {
    return [
      {
        name: 'Chandrima',
        path: './../../../assets/photos/team/Chandrima.jpg',
        Designation: 'B.tech 4th Year CSE | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/chandrima-p-71b452228/',
        GitHublink: '#',
      },
      {
        name: 'Dhritideepa Sarania',
        path: './../../../assets/photos/team/dhritideepa.png',
        Designation: 'B.Tech 4th Year CSE | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/dhritideepa-sarania-761b40250',
        GitHublink: 'https://github.com/dee-sarania',
      },
      {
        name: 'Himanshu Sharma',
        path: './../../../assets/photos/team/himanshu.png',
        Designation: 'B.Tech 4th Year CSE | Tezpur University',
        LinkedInlink: '#',
        GitHublink: 'https://github.com/IVYLIFE',
      },
      {
        name: 'Harshit Mahla',
        path: './../../../assets/photos/team/harshit.jpeg',
        Designation: 'B.Tech 4th Year CSE | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/harshit-mahla-70b72b241/',
        GitHublink: 'https://github.com/harshit-mahla',
      },
      {
        name: 'Kumarjit Ray',
        path: './../../../assets/photos/team/kumarjit.JPG',
        Designation: 'PhD Scholar | IIT Kharagpur | Former Asst. Prof. Siksha O Anusandhan',
        LinkedInlink: 'https://in.linkedin.com/in/kumarjit1997',
        GitHublink: '#',
      },
      {
        name: 'Rajdeep Ghosh',
        path: './../../../assets/photos/team/rajdeep.jpg',
        Designation: 'MTech CSE | Calcutta University',
        LinkedInlink: 'https://in.linkedin.com/in/rajdeep-ghosh-301082175',
        GitHublink: '#',
      },
      {
        name: 'Rajveer Chaudhary',
        path: './../../../assets/photos/team/rajveer.png',
        Designation: 'B.Tech 4th Year CSE | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/RajveerChoudhary/',
        GitHublink: 'https://github.com/Rajveer6000',
      },
      {
        name: 'Sanju Kumari Gupta',
        path: './../../../assets/photos/team/Sanju.jpeg',
        Designation: 'B.Tech 3rd Year CSE | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/sanju-kumari-gupta-bb3505283/',
        GitHublink: 'https://github.com/Ian12003',
      },
      {
        name: 'Sakil Aziz',
        path: './../../../assets/photos/team/user.png',
        Designation: 'B.Tech 3trd Year CSE | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/sakil-a-2b0379256',
        GitHublink: 'https://github.com/SakilAziz075',
      },
      {
        name: 'Vivek Rai',
        path: './../../../assets/photos/team/vivek.png',
        Designation: 'B.Tech 4th Year CSE | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/vivek-rai-452b22218',
        GitHublink: 'https://github.com/vivekrai9900',
      },
    ];
  }

  getfoundingmembers(): TeamMember[] {
    return [
      {
        name: 'Adittya Dey',
        path: './../../../assets/photos/team/adittya.jpg',
        Designation: 'SDE II Velocity',
        LinkedInlink: 'https://in.linkedin.com/in/adittyadey',
        GitHublink: '#',
      },
      {
        name: 'Dilwar Hussain Barbhuiya',
        path: './../../../assets/photos/team/dilwar.jpg',
        Designation: 'PhD Scholar | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: '#',
      },
      {
        name: 'Kunal Das',
        path: './../../../assets/photos/team/kunal.jpg',
        Designation: 'Intern | ex-IQVIA',
        LinkedInlink: 'https://in.linkedin.com/in/kunal-das-131158185',
        GitHublink: '#',
      },
      {
        name: 'Kumarjit Ray',
        path: './../../../assets/photos/team/kumarjit.JPG',
        Designation: 'PhD Scholar | IIT Kharagpur | Former Asst. Prof. Siksha O Anusandhan',
        LinkedInlink: 'https://in.linkedin.com/in/kumarjit1997',
        GitHublink: '#',
      },
      {
        name: 'Rajdeep Ghosh',
        path: './../../../assets/photos/team/rajdeep.jpg',
        Designation: 'MTech CSE | Calcutta University',
        LinkedInlink: 'https://in.linkedin.com/in/rajdeep-ghosh-301082175',
        GitHublink: '#',
      },
    ];
  }

  getpastmembers(): TeamMember[] {
    return [
      {
        name: 'Antara Singhal',
        path: './../../../assets/photos/team/antara.png',
        Designation: 'B.tech CSE Pass Out(2024) | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/antara-singhal',
        GitHublink: '#',
      },
      {
        name: 'Arindom Aich',
        path: './../../../assets/photos/team/arindom.jpg',
        Designation: 'B.tech CSE Pass Out(2024) | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/arindomaich',
        GitHublink: '#',
      },
      {
        name: 'Bhargab Pratim Nath',
        path: './../../../assets/photos/team/bhargav.jpg',
        Designation: 'B.tech 4th Year ECE | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/bhargab-pratim-nath-a777b3216S',
        GitHublink: '#',
      },
      {
        name: 'Debangee Goswami',
        path: './../../../assets/photos/team/debangee.jpeg',
        Designation: 'B.tech EE Pass Out(2023) | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/debangee-goswami-601577222',
        GitHublink: '#',
      },
      {
        name: 'Deekshith Kumar',
        path: './../../../assets/photos/team/deekshith.jpg',
        Designation: 'B.tech CSE Pass Out(2024) | Tezpur University',
        LinkedInlink: '#',
        GitHublink: '#',
      },
      {
        name: 'Dibyaroop Das',
        path: './../../../assets/photos/team/dibya.jpg',
        Designation: 'B.tech CSE Pass Out(2023) | Tezpur University',
        LinkedInlink: 'https://in.linkedin.com/in/dibyaroop-das-8803a41a4',
        GitHublink: '#',
      },
      {
        name: 'Prabhatangshu Phukan',
        path: './../../../assets/photos/team/prabhat.jpeg',
        Designation: 'B.tech EE Pass Out(2023) | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/prabhatangshu-phukan',
        GitHublink: '#',
      },
      {
        name: 'Pratik Chanda',
        path: './../../../assets/photos/team/Pratik.jpg',
        Designation: 'B.tech EE Pass Out(2024) | Tezpur University',
        LinkedInlink: 'https://in.linkedin.com/in/pratik-chanda-a498aa214',
        GitHublink: '#',
      },
      {
        name: 'Pritindra Das',
        path: './../../../assets/photos/team/pritindra.jpg',
        Designation: 'B.tech CSE Pass Out(2023) | Tezpur University',
        LinkedInlink: 'https://in.linkedin.com/in/pritindra-das',
        GitHublink: '#',
      },
      {
        name: 'Tanushree Das',
        path: './../../../assets/photos/team/tanushree.jpg',
        Designation: 'B.tech CSE Pass Out(2024) | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/tanushree-das-80a927209',
        GitHublink: '#',
      },
      {
        name: 'Tridib Lochan Dutta',
        path: './../../../assets/photos/team/tridib.jpeg',
        Designation: 'B.tech ECE Pass Out(2024) | Tezpur University',
        LinkedInlink: 'https://www.linkedin.com/in/debangee-goswami-601577222',
        GitHublink: '#',
      },
      {
        name: 'Vicky Deka',
        path: './../../../assets/photos/team/vicky.jpg',
        Designation: 'B.tech CSE Pass Out(2023) | Tezpur University',
        LinkedInlink: 'https://in.linkedin.com/in/vickydeka',
        GitHublink: '#',
      },
    ];
  }

  removeclass(): void {
    document.getElementById('Mentor')?.classList.remove('activeclass');
    document.getElementById('CurrentScholars')?.classList.remove('activeclass');
    document.getElementById('Currentmembers')?.classList.remove('activeclass');
    document.getElementById('foundingmembers')?.classList.remove('activeclass');
    document.getElementById('pastmembers')?.classList.remove('activeclass');
    document.getElementById('Mentor1')?.classList.remove('buttoncolor');
    document.getElementById('CurrentScholars1')?.classList.remove('buttoncolor');
    document.getElementById('Currentmembers1')?.classList.remove('buttoncolor');
    document.getElementById('foundingmembers1')?.classList.remove('buttoncolor');
    document.getElementById('pastmembers1')?.classList.remove('buttoncolor');
  }

  Mentor(): void {
    this.removeclass();
    document.getElementById('Mentor')?.classList.add('activeclass');
    document.getElementById('Mentor1')?.classList.add('buttoncolor');
  }

  CurrentScholars(): void {
    this.removeclass();
    document.getElementById('CurrentScholars')?.classList.add('activeclass');
    document.getElementById('CurrentScholars1')?.classList.add('buttoncolor');
  }

  Currentmembers(): void {
    this.removeclass();
    document.getElementById('Currentmembers')?.classList.add('activeclass');
    document.getElementById('Currentmembers1')?.classList.add('buttoncolor');
  }

  foundingmembers(): void {
    this.removeclass();
    document.getElementById('foundingmembers')?.classList.add('activeclass');
    document.getElementById('foundingmembers1')?.classList.add('buttoncolor');
  }

  pastmembers(): void {
    this.removeclass();
    document.getElementById('pastmembers')?.classList.add('activeclass');
    document.getElementById('pastmembers1')?.classList.add('buttoncolor');
  }
}
