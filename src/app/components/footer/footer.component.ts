import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    isPopupVisible : boolean
    origine: string
  
    constructor(private http: HttpClient){}
  
    ngOnInit(): void {}
  
    public onButtonClick(origine:string): void {
        this.origine = origine
        this.isPopupVisible = true
    }
  
    public closePopup(): void {
        this.isPopupVisible = false;
    }
}
