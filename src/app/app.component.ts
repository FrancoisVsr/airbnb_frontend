import { Component, OnInit, HostListener } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

/**
 * Nous gérons dans app.components le fait de pouvoir gerer la position 
 * d'un élément à l'écran en fonction de la taille de la fenêtre. Nous pouvons 
 * également suivre les changements dans la div search-box fait depuis le header
 * afin de renvoyer avec l'élement search$ les changements à notre mainpage
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showHeader = true;
  title = 'airbnb';
  topValue = '13vh';

    search$: BehaviorSubject<string> = new BehaviorSubject("");

    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
      this.updateTopValue();
    }

    ngOnInit():void{
      this.search$.next("")
      this.updateTopValue();
    }

    public onSearchEmit(search: string): void {
      /* DEBUG */
      //console.log("search from app : ", search);
      
      this.search$.next(search);
    }

  /**La fonction updateTopValue calcule et met à jour topValue
   *  en fonction de la hauteur de la fenêtre. Si la hauteur de
   *  la fenêtre est inférieure à 80 pixels, topValue est réglé à 13vh. 
   * Sinon, il est réglé à 80px. */  
  updateTopValue() {
    const windowHeight = window.innerHeight;
    this.topValue = windowHeight > 80 ? '80px' : '13vh';
  }
}
