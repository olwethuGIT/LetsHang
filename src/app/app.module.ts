import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogModule } from 'projects/blog/src/app/app.module';
import { PortfolioModule } from 'projects/portfolio/src/app/app.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule.forRoot(),
    PortfolioModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
