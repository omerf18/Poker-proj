import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from './services/game-service';
import { CommonModule } from '@angular/common';
import { TableCmp } from './pages/table/table.cmp';
import { GameComponent } from './cmps/game/game.component';
import { HttpService } from './services/http-service';

@NgModule({
  declarations: [
    AppComponent,
    TableCmp,
    GameComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    // FormsModule,
    // ReactiveFormsModule,
  ],
  providers: [
    // HttpService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
