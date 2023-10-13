import { Component, OnInit } from '@angular/core';

interface AnnonceData{ 
  title:string; 
  description: string;
}

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {
  annonceData: AnnonceData | undefined;  // Définissez une interface ou un modèle pour les données d'annonce

  ngOnInit(): void {
    // Récupérer les données de l'annonce passées depuis la fenêtre parente
    //this.annonceData = (window.opener as any).annonceData;
    this.annonceData = {
      title: "Titre annonce",
      description: "Description annice"
    }
  }
}
