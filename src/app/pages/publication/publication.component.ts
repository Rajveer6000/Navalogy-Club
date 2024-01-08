import { Component } from '@angular/core';
import { PublicationCardComponent } from '../../component/publication-card/publication-card.component';
import { CommonModule } from '@angular/common';
export interface publication {
  id: string,
  title: string,
  subTitle: string,
  description: string,
  publicationLink: string,
  publicationDate: string,
}
@Component({
  selector: 'app-publication',
  standalone: true,
  imports: [PublicationCardComponent, CommonModule],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.css'
})
export class PublicationComponent {
  getpublication(): publication[] {
    return [
      {
        id: 'c',
        title: `"Preserving flow table integrity in OpenFlow networks through smart contract"`,
        subTitle: 'Cluster Computing',
        description: `Software-Defined Networking (SDN) has transformed network management by introducing a centralized controller that simplifies network configuration. This separation of the control plane from the forwarding devices, while enhancing flexibility, also exposes vulnerabilities that can be exploited by adversaries to manipulate flow rules on SDN switc...`,
        publicationLink: `https://link.springer.com/article/10.1007/s10586-023-04196-3`,
        publicationDate: `2023/11/29`,

      },

      {
        id: 'd',
        title: `"Performances of M2M Protocols in Internet of Medical Things" Accepted in IEEE WS16 ICC'2023 Workshop - SIGNIS"`,
        subTitle: '2023 IEEE International Conference on Communications Workshops (ICC Workshops)',
        description: `The Internet of Medical Things (IoMT) is a constantly developing idea that aims to connect the medical IoT devices used in the healthcare industry. IoMT devices use their environment to detect, collect and send vital information about the medical parameters of a user/patient. This data can be then used for health monitoring of patients remotely ...`,
        publicationLink: `https://ieeexplore.ieee.org/abstract/document/10283663/`,
        publicationDate: `2023/05/28`,

      },

      {
        id: 'e',
        title: `"A Blockchain-Assisted Authentication for SDN-IoT Network Using Smart Contract"`,
        subTitle: '2023 4th International Conference on Computing and Communication Systems (I3CS)',
        description: `The Internet of Things (IoT) is a rapidly growing technology due to the demand for automation in various industries, such as healthcare, manufacturing, and home automation etc. As IoT devices continue to proliferate, authentication and access control remain a major challenge. By verifying the identity of the device and the user, authentication h...`,
        publicationLink: `https://ieeexplore.ieee.org/abstract/document/10127386/`,
        publicationDate: `2023/03/16`,

      },

      {
        id: 'f',
        title: `"iRASA: Fog Scheduling With Congregation of MVO and PSO"`,
        subTitle: '2023 4th International Conference on Computing and Communication Systems (I3CS)',
        description: `Internet of Things (IoT) can be most accurately conceptualized as a network connecting billions of individual transmission entities all ready to either share or receive data in any and all plausible situations. Among the prevalent implementations in the networking genre of IoT include cloud, fog, and edge computing models. Although each pair has...`,
        publicationLink: `https://ieeexplore.ieee.org/abstract/document/10127339/`,
        publicationDate: `2023/03/16`
      },

      {
        id: 'g',
        title: `"A Radio Frequency-Based Energy Harvesting Model for IoMT Device"`,
        subTitle: 'International Conference on Information Technology',
        description: `The Internet of Medical Things (IoMT), also known as Smart Healthcare, has seen incredible progress in the Smart Environment industry. A significant part of Industry 4.0 is Healthcare 4.0, which is transforming the medical industry to monitor patient's health remotely and perform other health-related activities. The IoMT includes many wearable s...`,
        publicationLink: `https://link.springer.com/chapter/10.1007/978-981-99-5997-6_1`,
        publicationDate: `2023/03/02`
      },

      {
        id: 'h',
        title: `"Health condition prediction and covid risk detection using healthcare 4.0 techniques"`,
        subTitle: 'Smart Health',
        description: `Healthcare 4.0 is one of the emerging concepts that has grabbed the interest among researchers as well as the medical sector. Using the Internet of Things (IoT) and sophisticated communication technologies, it is now possible to monitor the patient from a remote area. In this paper, we design a remote health monitoring system using IoT and Machi...`,
        publicationLink: `https://www.sciencedirect.com/science/article/pii/S2352648322000563`,
        publicationDate: `2022/12/01`
      },

      {
        id: 'i',
        title: `"Throughput prediction in smart healthcare network using machine learning approaches"`,
        subTitle: '2022 IEEE 19th India Council International Conference (INDICON)',
        description: `Modern-day healthcare is being challenged by the critical nature of traffic requirements for services like health monitoring, remote consultations, and robotic surgery. While the existing literature addresses various algorithms for real-world throughput prediction, there is a lack of systematic exploration of these algorithms in healthcare. In t...`,
        publicationLink: `https://ieeexplore.ieee.org/abstract/document/10040160/`,
        publicationDate: `2022/11/24`
      },

      {
        id: 'j',
        title: `"Resource aware fog based remote health monitoring system"`,
        subTitle: 'IEEE INFOCOM 2022-IEEE Conference on Computer Communications Workshops (INFOCOM WKSHPS)',
        description: `In today's world of medical science, remote patient monitoring devices are becoming more important and a future need particularly in the present COVID-19 situation as individuals are preferred to be kept isolated. Patients would be benefited from a suitable monitoring system that measures their important medical parameters such as pulse rate, ox...`,
        publicationLink: `https://ieeexplore.ieee.org/abstract/document/9798058/`,
        publicationDate: `2022/5/2`
      },

      {
        id: 'k',
        title: `"Health monitoring in Internet of Medical Things (IoMT) using machine learning (ML) approaches"`,
        subTitle: '2021 IEEE Globecom Workshops (GC Wkshps)',
        description: `In today's world, the Internet of Medical Things (IoMT) is a term that is catching the attention of many researchers. IoMT is used to exchange data between IoT enabled medical sensors and other smart devices for the purpose of healthcare. In this paper, existing machine learning (ML) techniques and models are used to monitor and predict the heal...`,
        publicationLink: `https://ieeexplore.ieee.org/abstract/document/9682039/`,
        publicationDate: `2021/12/7`
      },

      {
        id: 'l',
        title: `"Openhealthq: Openflow based qos management of healthcare data in a software-defined fog environment"`,
        subTitle: 'ICC 2021-IEEE International Conference on Communications',
        description: `With the incorporation of Internet of Things (IoT) in healthcare systems immense new possibilities have emerged in the modern healthcare services. In recent times where people around the globe are suffering from the Covid-19 pandemic, providing remote healthcare services maintaining necessary social distancing through e-Healthcare has become an ...`,
        publicationLink: `https://ieeexplore.ieee.org/abstract/document/9500637/`,
        publicationDate: `2021/6/14`
      },
    ];
  }
}
