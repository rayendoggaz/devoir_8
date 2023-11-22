import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { concertsComponent } from './concerts/concerts.component';
import { AddconcertComponent } from './add-concert/add-concert.component';
import { FormsModule } from '@angular/forms';
import { UpdateconcertComponent } from './update-concert/update-concert.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    concertsComponent,
    AddconcertComponent,
    UpdateconcertComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
