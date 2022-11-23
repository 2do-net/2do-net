import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdeaComponent } from './idea/idea.component';
import { IdeaDetailsComponent } from './idea-details/idea-details.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    IdeaComponent,
    IdeaDetailsComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
