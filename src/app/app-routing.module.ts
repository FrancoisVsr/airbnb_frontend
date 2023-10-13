import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { CardComponent } from './components/card/card.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

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
