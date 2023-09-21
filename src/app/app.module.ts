import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { SobreComponent } from './sobre/sobre.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

@NgModule({
  declarations: [
    StartComponent,
    HomeComponent,
    SobreComponent,
    HeaderMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  exports: [HeaderMenuComponent],
  providers: [],
  bootstrap: [StartComponent],
})
export class AppModule {}
