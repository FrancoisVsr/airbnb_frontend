import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
    isPopupVisible : boolean
    origine: string
  
    constructor(private http: HttpClient, private el: ElementRef){}
  
    ngOnInit(): void {}
  
    public onButtonClick(origine:string): void {
        this.origine = origine
        this.isPopupVisible = true
    }
  
    public closePopup(): void {
        this.isPopupVisible = false;
    }

    ngAfterViewInit() {
        this.adjustSwitchMapPosition();
        // Écoute les changements de taille de l'écran
        window.addEventListener('resize', () => {
          this.adjustSwitchMapPosition();
        });
    }

    private adjustSwitchMapPosition(): void {
        // Accéder à l'élément DOM correspondant à la classe .footer
        const footerElement = this.el.nativeElement.querySelector('.footer');
        // Calculer la hauteur de l'élément .footer
        const footerHeight = footerElement.offsetHeight;
        // Accéder à l'élément DOM correspondant à la classe .switch-map
        const switchMapElement = this.el.nativeElement.querySelector('.switch-map');    
        // Ajuster la valeur de 'bottom' pour .switch-map
        switchMapElement.style.bottom = footerHeight + 50 + 'px';
    }
}
