import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {simpleReducer} from './simple.reducer'
import { voteReducer } from './vote.reducer';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule, StoreModule.forRoot({vote : voteReducer, message : simpleReducer}),],
  providers: [],
  bootstrap: [AppComponent], 
})
export class AppModule {}
