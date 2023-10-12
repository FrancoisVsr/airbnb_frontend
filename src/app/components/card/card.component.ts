import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Logement } from 'src/app/models/Logement';
import { AnnonceComponent } from '../annonce/annonce.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() logement: Logement;
  @Output() favoriteChanged = new EventEmitter<{ logementId: number; isFavorite: boolean }>();

  ngOnInit(): void {}

  openWindow() {
    const url = `${window.location.origin}/annonce`;
    const newWindow = window.open(`${url}`, '_blank');

    if (newWindow) {
      const faviconLink = document.createElement('link');

      faviconLink.setAttribute('rel', 'icon');
      faviconLink.setAttribute('type', 'image/x-icon');
      faviconLink.setAttribute('href', '../../../favicon.ico');
      newWindow.document.head.appendChild(faviconLink);
    } else {
      console.error("La fenêtre n'a pas pu être ouverte.");
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
