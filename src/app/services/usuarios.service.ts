import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'http://localhost:4000/api/usuarios/';

  constructor(private http: HttpClient) { }

  // Obtiene los datos de un usuario en nuestra base de datos
  getUsuario(email: string): Observable<any>{
    return this.http.get(this.url + email);
  }
  
  // Guarda/Actualiza el email de un usuario en nuestra base de datos
  guardarEmailUsuario(user: User): Observable<any> {
        // Construye la URL correctamente incluyendo el userName
    const apiUrl = `${this.url}${user.usuario}`;
    // Envía el cuerpo de la solicitud con el email del usuario
    return this.http.put(apiUrl, { email: user.email, nombre: user.nombre });
  }
}
