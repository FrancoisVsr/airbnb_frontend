import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { } // Injectez le Router

  // redirectToHome() {
  //   this.router.navigate(['/accueil']); // Remplacez '/accueil' par le chemin de votre page d'accueil
  // }
  
}
