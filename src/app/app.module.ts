import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, simpleReducer, voteReducer, reducerMap } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule, StoreModule.forRoot(reducerMap),],
  providers: [],
  bootstrap: [AppComponent], 
})
export class AppModule {}
