import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NglModule} from 'ng-lightning/ng-lightning';
import { AppComponent } from './app.component';
import { CurrencyService } from './services/currency.service';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NglModule.forRoot()
  ],
  exports:[
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
