import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MatGridListModule,
  MatIconModule,  
  MatCardModule,
  MatInputModule,
  MatListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { HolidayApiService } from './services/holidayapi.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatGridListModule,
    MatIconModule,  
  MatCardModule,
  MatInputModule,
  MatListModule
  ],
  providers: [HolidayApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
