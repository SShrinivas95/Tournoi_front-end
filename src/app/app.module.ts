import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Partie1Component } from './partie1/partie1.component';
import { HttpClientModule } from '@angular/common/http';
import { TournoiService } from './services/tournoi.service';

@NgModule({
  declarations: [
    AppComponent,
    Partie1Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,

  ],
  providers: [TournoiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
