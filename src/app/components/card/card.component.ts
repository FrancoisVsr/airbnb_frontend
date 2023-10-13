import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Logement } from 'src/app/models/Logement';
import { AnnonceComponent } from '../annonce/annonce.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() logement: Logement;
  @Output() favoriteChanged = new EventEmitter<{ logementId: number; isFavorite: boolean }>();

  constructor(private router: Router){}

  ngOnInit(): void {}

  openWindow() {
    //this.router.navigate(['annonce'])
    const url = `${window.location.origin}/annonce`;
    const newWindow: Window | null = window.open(url, '_blank');
  
    if (newWindow) {
      const faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      faviconLink.setAttribute('type', 'image/x-icon');
      faviconLink.setAttribute('href', '../../../favicon.ico');
      newWindow.document.head.appendChild(faviconLink);
    } else {
      console.error("La fenêtre n'a pas pu s'ouvrir");
    }
    // console.log('new window')
    // 
    // const newWindow: Window | null = window.open(`${url}`, '_blank');

    // if (newWindow) {
    //   const faviconLink = document.createElement('link');
    //   faviconLink.setAttribute('rel', 'icon');
    //   faviconLink.setAttribute('type', 'image/x-icon');
    //   faviconLink.setAttribute('href', '../../../favicon.ico');
    //   newWindow.document.head.appendChild(faviconLink);
      
    // // Passer les informations de l'annonce à la nouvelle fenêtre
    // const annonceData = { /* Vos données d'annonce ici */ };
    // (newWindow as any).annonceData = annonceData;

    // } else {
    //   console.error("La fenêtre n'a pas pu être ouverte.");
    // }

  }

  toggleFavorite(event: Event) {
    event.stopPropagation();
    this.logement.favourite = !this.logement.favourite; // Inversez l'état du favori
    this.favoriteChanged.emit({
        logementId: this.logement.id,
        isFavorite: this.logement.favourite,
      });
  }
}
