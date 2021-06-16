import { HeroImage } from './../HeroImage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heros: HeroImage[];
  constructor() { }

  ngOnInit(): void {
    this.heros = [
      {
        url: "https://user-images.githubusercontent.com/58942941/116071967-18ce3c00-a6c1-11eb-9cf8-6e4813a52324.png"
      },
      {
        url: "https://user-images.githubusercontent.com/58942941/116071988-1ff54a00-a6c1-11eb-9435-cddbc814ad74.png"
      },
      {
        url: "https://user-images.githubusercontent.com/58942941/116072008-27b4ee80-a6c1-11eb-912a-03c3f65901b0.png"
      },
      {
        url: "https://user-images.githubusercontent.com/58942941/116072031-2edbfc80-a6c1-11eb-9a0a-8195d9db7015.png"
      }
    ]
  }
}