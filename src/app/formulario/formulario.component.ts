import { Component, OnInit } from '@angular/core';
import {Usuario} from '../models/modelo';
import {Observable, Subscription} from 'rxjs';
import {ServicioService} from '../services/servicio.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
public usuarios: Usuario[];
public usuarios$: Observable<Usuario[]>;
public usuariosSuscripcion: Subscription;
public usuario: Usuario;
  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
 //   this.usuarios = this.servicioService.getUsuarios();
    this.usuarios$ = this.servicioService.getUsuarios$();
    this.usuariosSuscripcion = this.usuarios$.subscribe(usuarios => this.usuarios);
    this.usuario = this.servicioService.nuevoUsuario();
  }
  public nuevo(): void {
    this.servicioService.agregaUsuario(this.usuario); // Grabo el usuario
    this.usuario = this.servicioService.nuevoUsuario(); // limpio el objeto para el siguiente
  }
}
