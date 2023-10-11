import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})


export class SubHeaderComponent {
  scrollImages(direction: string) {
    // Ajoutez ici la logique pour faire défiler les images
    console.log('Faire défiler les images vers ' + direction);
  }
}