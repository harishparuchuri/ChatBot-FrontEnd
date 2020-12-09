import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotComponent } from './components/bot/bot.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayOrderComponent } from './components/display-order/display-order.component';

const routes: Routes = [
  {path:'Admin',component:DisplayOrderComponent},
  {path:'',component:BotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
