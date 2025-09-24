import { Component } from '@angular/core';
import { Star } from '../star/star';

@Component({
  selector: 'app-portfolio',
  imports: [Star],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  title: string = 'Portfolio component';
  lineClr: string = 'var(--main-clr)';
  flag: boolean = true;
  modelImg!: string;
  hideModel(element: EventTarget | null, img: HTMLImageElement) {
    if (element == img) return;
    this.flag = true;
  }
  PortfolioSrc: string[] = [
    '/StartFramework/assets/port1.png',
    'assets/port2.png',
    'assets/port3.png',
    'assets/port1.png',
    'assets/port2.png',
    'assets/port3.png',
  ];
}
