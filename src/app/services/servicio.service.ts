import { Injectable } from '@angular/core';
import {Usuario} from '../models/modelo';
import {Subject} from 'rxjs/internal/Subject';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private _usuarios: Usuario[];
  private _usuarios$ = new Subject<Usuario[]>();
  constructor() {
    this._usuarios =[];
  }

  public getUsuarios(){
        return this._usuarios;
  }

  public getUsuarios$(): Observable<Usuario[]> {
    return this._usuario$.asObservable();
  }

  nuevoUsuario(): Usuario {
    return new Usuario(null,null,null);
  }

  agregaUsuario(usuario: Usuario) {
    this._usuarios.push(usuario);
    this._usuarios$.next(this._usuarios);
  }
}
