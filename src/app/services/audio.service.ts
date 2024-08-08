import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Audio } from '../models/audio';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  url = 'http://localhost:4000/api/audios/';

  constructor(private http: HttpClient) { }

  getAudios(userName: string): Observable<any>{
    return this.http.get(this.url + userName);
  }

  // Guarda el audio en base de datos
  crearAudio(audio: Audio): Observable<any>{
    return this.http.post(this.url + "crearAudio", audio);
  }

  // Sube el audio al cloud storage
  subirAudio(formData: FormData): Observable<any> {
    return this.http.post(this.url + "subirAudio", formData);
  }
  
}
