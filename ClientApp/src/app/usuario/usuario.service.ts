import { Injectable } from '@angular/core';

Injectable()
@Injectable()
export class UsuarioService {
    usuario: any;

    setUsuario(NuevoUsuario){
        this.usuario = NuevoUsuario;
    }
    getUsuario(){
        return this.usuario;
    }
}
