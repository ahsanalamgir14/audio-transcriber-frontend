import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { LogInComponent } from './components/log-in/log-in.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component: LogInComponent},
  {path:'menu', component: MenuComponent},
  {path:'login', component: LogInComponent},
  {path:'home', component: HomeComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
