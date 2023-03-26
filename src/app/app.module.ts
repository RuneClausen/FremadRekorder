import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecordsComponent } from './records/records.component';
import { AthletePageComponent } from './athlete-page/athlete-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecordsComponent,
    AthletePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
