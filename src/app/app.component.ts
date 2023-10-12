import { Component, OnInit, HostListener } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
    console.log("search from app : ", search);
    this.search$.next(search);
  }

  updateTopValue() {
    const windowHeight = window.innerHeight;
    this.topValue = windowHeight > 80 ? '80px' : '13vh';
  }
}
