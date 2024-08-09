import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  public sidebarShow: boolean = false;
  public showMenu: boolean = true;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      // Verificar la ruta actual y ocultar el menú si es necesario
      if (this.router.url === '/login') {
        this.showMenu = false;
        this.sidebarShow = false;
      } else {
        this.showMenu = true;
      }
      this.sidebarShow = false; // Establecer sidebarShow como false al iniciar el componente
    });
    
  }

  toggleSidebar() {
    this.sidebarShow = !this.sidebarShow
  }

  logout(){
    this.router.navigate(['/login']);
  }

  misAudios(){
    this.router.navigate(['/misaudios', "testuser"]);
  }

  grabadora(){
    this.router.navigate(['/grabadora']);
  }

  home(){
    this.router.navigate(['/home']);
  }

  miPerfil(){
    this.router.navigate(['/usuario']);
  }

}
