import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CardComponent,
    HeaderComponent,
    MainpageComponent,
    SubHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
