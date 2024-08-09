import { Component, OnDestroy  } from '@angular/core';
import { Audio } from '../../models/audio';
import { AudioService } from '../../services/audio.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

@Component({
  selector: 'app-grabadora',
  templateUrl: './grabadora.component.html',
  styleUrl: './grabadora.component.scss'
})

export class GrabadoraComponent implements OnDestroy {

  mediaRecorder: MediaRecorder | null = null;
  chunks: Blob[] = [];
  grabando = false;
  tiempoInicio: number | null = null;
  tiempoTranscurrido = '00:00';
  mostrarRegrabar = false;
  calidadAudio: string = 'Tiny'; // Valor predeterminado

  constructor(private _audioService: AudioService, private toastr: ToastrService, private router:Router) { }

  //Iniciamos la grabación y guardamos el audio
  async iniciarGrabacion() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.ondataavailable = (e: BlobEvent) => {
        this.chunks.push(e.data);
      };
      this.mediaRecorder.onstop = () => {
        this.mostrarRegrabar = true;
        this.detenerContador();
        this.grabando = false;
      };
      this.mediaRecorder.start();
      this.iniciarContador();
      this.grabando = true;
    } catch (error) {
      console.error('Error al acceder al micrófono:', error);
    }
  }

  //Selección de la calidad del audio
  seleccionarCalidad(calidad: string) {
    this.calidadAudio = calidad;
  }

  //Detiene la grabación y deja de usar el grabador web
  detenerGrabacion() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
      if (this.mediaRecorder.stream) {
        this.mediaRecorder.stream.getTracks().forEach(track => track.stop());
      }
    }
  }
  
  //Guardamos el audio en BBDD y reiniciamos el proceso
  guardarAudio() {

    //Variables necesarias para el nombre de audio
    let userName = "testuser";
    const fechaYHora = this.obtenerFechaYHoraActual();
    const segundosTotales = this.convertirDuracionASegundos(this.tiempoTranscurrido);

    const nombre = fechaYHora+'_'+segundosTotales+'_'+userName+'_'+this.calidadAudio+'_'+'es'; // Nombre del audio
    const calidad = this.calidadAudio; // Calidad del audio (puedes cambiarlo según tus necesidades)
    const fecha = new Date(); // Fecha actual
    const isProcesado = false; // Asumiendo que el audio no está procesado inicialmente

    const audio = new Audio(userName, nombre, calidad, fecha, isProcesado);

    //Guardamos el audio en BBDD
    this._audioService.crearAudio(audio).subscribe(data => {
      console.log('Guardado en base de datos OK');
    }, error => {
      console.log(error);
      this.toastr.error('Ha ocurrido un error en el proceso', 'Audio no guardado en base de datos');
    })


    // -- SUBIR AUDIO A STORAGE --
    const formData = new FormData();
    formData.append('audioBlob', new Blob(this.chunks, { type: 'audio/opus' }), nombre);
    formData.append('nombre', nombre);

    this._audioService.subirAudio(formData).subscribe( data => {
      console.log('Enviado a Cloud OK');
      this.toastr.success('¡El audio se procesado con éxito!', 'Audio procesado');
    }, error => {
      console.log(error);
      this.toastr.error('Ha ocurrido un error en el proceso', 'Audio no guardado en base de datos');
    })
    // -------------------------

    this.mostrarRegrabar = false;
    this.chunks = [];

  }

  //Eliminamos el audio grabado y volvemos a empezar
  eliminarAudio(){
    this.mostrarRegrabar = false;
    this.chunks = [];
    this.tiempoTranscurrido = '00:00';
  }

  //Inicia el contador de tiempo para la grabadora
  iniciarContador() {
    this.tiempoInicio = Date.now();
    this.actualizarTiempo();
  }

  //Detenemos el contador de tiempo en al grabadora
  detenerContador() {
    this.tiempoInicio = null;
  }

  //Vamos actualizando el tiempo que llevamos grabando
  actualizarTiempo() {
    if (this.tiempoInicio !== null) {
      const tiempoActual = Date.now();
      const diferencia = tiempoActual - this.tiempoInicio;
      const minutos = Math.floor(diferencia / 60000);
      const segundos = Math.floor((diferencia % 60000) / 1000);
      this.tiempoTranscurrido = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
      setTimeout(() => {
        this.actualizarTiempo();
      }, 1000);
    }
  }

  ngOnDestroy() {
    this.detenerContador();
  }

  logout(){
    this.router.navigate(['/login']);
  }

  misAudios(){
    this.router.navigate(['/misaudios', "testuser"]);
  }

  blob(){
    this.router.navigate(['/blober']);
  }

  // #region Métodos auxiliares
  obtenerFechaYHoraActual(): string {
    const fechaActual = new Date();
    
    const año = fechaActual.getFullYear();
    const mes = ('0' + (fechaActual.getMonth() + 1)).slice(-2); // Se agrega un +1 al mes porque los meses van de 0 a 11
    const dia = ('0' + fechaActual.getDate()).slice(-2);
    
    const horas = ('0' + fechaActual.getHours()).slice(-2);
    const minutos = ('0' + fechaActual.getMinutes()).slice(-2);
    const segundos = ('0' + fechaActual.getSeconds()).slice(-2);
    
    const fechaFormateada = `${año}-${mes}-${dia}&${horas}-${minutos}-${segundos}`;
    return fechaFormateada;
  }
    
  convertirDuracionASegundos(duracion: string): number {
    const [minutos, segundos] = duracion.split(':');
    const totalSegundos = (parseInt(minutos) * 60) + parseInt(segundos);
    return totalSegundos;
  }

  stopAudio() {
    
  }
  //#endregion

}