import { Component, ReflectiveInjector } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
@Component({
    selector:'usuario-app',
    templateUrl:'./usuario.component.html',
    styles:['./usuario.component.css']
})

export class UsuarioComponent {
    nombreUsuario: string;

    constructor(private usuarioService:UsuarioService){
    }

    SignIn():void{
        this.usuarioService.setUsuario({
            nombre:'Oscar Rojas'
        })

        this.nombreUsuario = this.usuarioService.getUsuario().nombre;
        console.log('El nombre del usuario login: ',this.nombreUsuario)
    }

}
