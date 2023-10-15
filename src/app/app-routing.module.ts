import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { CardComponent } from './components/card/card.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

/**
 * Définition des itinéraires de navigation de l'application. 
 * Lorsque l'URL correspond à l'un des chemins spécifiés, Angular charge
 * le composant correspondant. Si l'URL est vide, il redirige vers la page d'accueil.
 */
const routes: Routes = [
    { path: 'annonce', component: AnnonceComponent },

    // Route par défaut pour rediriger vers la page d'accueil
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path : 'accueil', component: MainpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
