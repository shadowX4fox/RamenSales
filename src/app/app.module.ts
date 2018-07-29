import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartModule} from 'primeng/chart';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { DemoServiceService } from './demo-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [DemoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

  

 }
