import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { LogInComponent } from './components/log-in/log-in.component';
import { GrabadoraComponent } from './components/grabadora/grabadora.component';
import { MisAudiosComponent } from './components/mis-audios/mis-audios.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { LogInGuardian } from './components/log-in/log-in.guardian';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige al login por defecto
  { path: 'menu', component: MenuComponent }, // Ruta para el menú, accesible desde cualquier parte de la aplicación
  { path: 'home', component: HomeComponent, canActivate: [LogInGuardian] }, // Ruta para la página principal
  { path: 'login', component: LogInComponent }, // Ruta para la página de inicio de sesión
  { path: 'grabadora', component: GrabadoraComponent, canActivate: [LogInGuardian] }, // Ruta para la grabadora
  { path: 'usuario', component: UserPageComponent, canActivate: [LogInGuardian] }, // Ruta para la pagina de usuario
  { path: 'misaudios/:userName', component: MisAudiosComponent, canActivate: [LogInGuardian] }, // Ruta para los audios del usuario
  { path: '**', redirectTo: 'login' } // Redirige a la página de inicio de sesión en caso de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
