/*import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

}*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  // Données du carrousel
  slides = [
    {
      image: 'https://placehold.co/100x100.png?text=👤', // Image du client
      name: 'Edward Newgate',
      role: 'Founder Circle',
      quote: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, or administrative hassle) and securely.”',
    },
    {
      image: 'https://placehold.co/100x100.png?text=👤', // Image du client
      name: 'John Doe',
      role: 'CEO of HealthCorp',
      quote: '“The app is incredibly user-friendly and has made managing my health so much easier.”',
    },
    {
      image: 'https://placehold.co/100x100.png?text=👤', // Image du client
      name: 'Jane Smith',
      role: 'Marketing Director',
      quote: '“I love how seamless the experience is. It’s like having a doctor in your pocket!”',
    },
  ];

  // Index de la diapositive actuelle
  currentSlide = 0;

  // Passer à la diapositive suivante
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  // Revenir à la diapositive précédente
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
