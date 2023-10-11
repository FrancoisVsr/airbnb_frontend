import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent {
  shouldAddShadow: boolean = false;

  scrollImages(direction: string) {
    // Ajoutez ici la logique pour faire défiler les images
    console.log('Faire défiler les images vers ' + direction);
  }

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // position actuelle de défilement
    const scrollPosition = window.scrollY || window.pageYOffset;
    // valeur seuil à partir de laquelle on ajoute la classe CSS
    const scrollThreshold = 20;

    this.shouldAddShadow = scrollPosition > scrollThreshold;
  }
}
