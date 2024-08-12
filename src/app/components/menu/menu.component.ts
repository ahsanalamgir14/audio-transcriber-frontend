import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  public sidebarShow: boolean = false;
  public showMenu: boolean = true;
  visible = false;

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

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  
  toggleSidebar() {
    this.sidebarShow = !this.sidebarShow
  }

  logout(){
    this.router.navigate(['/login']);
    this.close();
  }

  misAudios(){
    this.router.navigate(['/misaudios', "testuser"]);
    this.close();
  }

  grabadora(){
    this.router.navigate(['/grabadora']);
    this.close();
  }

  home(){
    this.router.navigate(['/home']);
    this.close();
  }

  miPerfil(){
    this.router.navigate(['/usuario']);
    this.close();
  }

}
