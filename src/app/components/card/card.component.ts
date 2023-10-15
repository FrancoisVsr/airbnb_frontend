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

  /**
   * Permet l'ouverture d'une nouvelle fenêtre lors de l'appuie sur une annnonce (card)
   */
  openWindow() {
    // Création de l'URL pour la nouvelle fenêtre
    const url = `${window.location.origin}/annonce`;
  
    // Ouvrir une nouvelle fenêtre (ou onglet) avec l'URL spécifiée
    const newWindow: Window | null = window.open(url, '_blank');
  
    // Vérifier si la fenêtre a été s'ouvre
    if (newWindow) {
      const faviconLink = document.createElement('link'); // Création d'un lien pour l'icône de la nouvelle fenêtre
      faviconLink.setAttribute('rel', 'icon'); // Définir le type de lien
      faviconLink.setAttribute('type', 'image/x-icon'); // Spécifier le type du fichier de l'icône (favicon)
      faviconLink.setAttribute('href', '../../../favicon.ico'); // Chemin vers l'icône favicon
      newWindow.document.head.appendChild(faviconLink); // Ajout du lien de l'icône dans l'en-tête de la nouvelle fenêtre
    } else { // Sinon debug console
      console.error("La fenêtre n'a pas pu s'ouvrir");
    }
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
