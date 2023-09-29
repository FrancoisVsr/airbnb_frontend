import { Component, Input } from '@angular/core';
import { Logement } from 'src/app/models/Logement';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() logement : Logement;
    ngOnInit(): void {    
    }
}
