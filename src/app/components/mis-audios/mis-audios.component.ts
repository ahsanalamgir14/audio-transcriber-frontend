import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AudioService } from '../../services/audio.service';
import { Audio } from '../../models/audio';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mis-audios',
  templateUrl: './mis-audios.component.html',
  styleUrls: ['./mis-audios.component.css']
})
export class MisAudiosComponent implements OnInit {
  userName: string | null;
  listAudios: Audio[] = [];
  p: number = 1; // página actual

  constructor(private aRouter: ActivatedRoute, private _audioService: AudioService, private router: Router, 
             private toastr: ToastrService) {
    this.userName = this.aRouter.snapshot.paramMap.get('userName');
  }

  ngOnInit(): void {
    this.obtenerAudios(this.userName);
  }

  obtenerAudios(userName: any) {
    this._audioService.getAudios(userName).subscribe(data => {
      console.log(data);
      this.listAudios = data;
    }, error => {
      console.log(error);
    });
  }

  enviarPorCorreo(audio: Audio) {
    console.log('Audio enviado por correo :)');
    this.toastr.info('El audio ha sido enviado por correo', 'Audio enviado');
  }

  verTranscripcion(audio: Audio) {
    console.log('Audio enviado por correo :)');
    this.toastr.info('El audio ha sido enviado por correo', 'Audio enviado');
  }

  logout() {
    this.router.navigate(['/login']);
  }

  grabadora() {
    this.router.navigate(['/grabadora']);
  }
}
