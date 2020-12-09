import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotComponent } from './components/bot/bot.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayOrderComponent } from './components/display-order/display-order.component';


@NgModule({
  declarations: [
    AppComponent,
    BotComponent,
    AdminComponent,
    DisplayOrderComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [HeaderComponent],
})
export class AppModule { }
