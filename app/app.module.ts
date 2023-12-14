import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'; 
import { MatListModule } from '@angular/material/list';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoccerApiInterceptor } from './modules/core/interceptors/soccer-api.interceptor';
import { HeaderComponent } from './modules/core/components/header/header.component';
import { StandingsComponent } from './modules/standings/components/standings/standings.component';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { FixturesComponent } from './modules/standings/components/fixtures/fixtures.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StandingsComponent,
    HomeComponent,
    FixturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SoccerApiInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
