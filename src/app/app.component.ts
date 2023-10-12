import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'airbnb';

  //search$: Observable<string> = of('')
  search$: BehaviorSubject<string> = new BehaviorSubject("");

  ngOnInit():void{
    this.search$.next("")
  }

  public onSearchEmit(search: string): void {
    console.log("search from app : ", search);
    this.search$.next(search);
  }
}
