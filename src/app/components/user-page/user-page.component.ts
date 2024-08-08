import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user';
import { UsuariosService } from '../../services/usuarios.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public userName: string | undefined;
  public email: string = '';
  public nombre: string = '';

  constructor(private toastr: ToastrService, private userService: UsuariosService, private cookies:CookieService) { }

  ngOnInit(): void {
    this.userName = "testuser";
    const userData = this.cookies.get("userData");
    if (userData) {
      try {
        const userDataObj = JSON.parse(userData);
        this.email = userDataObj.email;
        this.nombre = userDataObj.nombre;
      } catch (e) {
        console.error("Error parsing userData from cookies", e);
      }
    }
  }

  guardarInfo() {
    const user = new User("testuser", this.nombre, this.email);

    this.userService.guardarEmailUsuario(user).subscribe(
      data => {
        console.log('Guardado en base de datos OK');
        this.toastr.success('Información guardada', 'Nuevo email configurado');

        // Actualizar el valor de email en las cookies
        const userData = this.cookies.get("userData");
        if (userData) {
          try {
            const userDataObj = JSON.parse(userData);
            userDataObj.email = this.email; // Actualiza el email
            userDataObj.nombre = this.nombre; // Actualiza el email
            this.cookies.set("userData", JSON.stringify(userDataObj)); // Guarda el valor actualizado en las cookies
          } catch (e) {
            console.error("Error updating userData in cookies", e);
          }
        }

      },
      error => {
        console.log(error);
        this.toastr.error('Ha ocurrido un error en el proceso', 'Información no guardada en base de datos');
      }
    );
  }
}
