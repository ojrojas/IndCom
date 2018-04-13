import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsuarioService} from '../services/usuario.service';
import { UsuarioComponent } from './usuario.component';

@NgModule({
    imports:[CommonModule],
    providers:[UsuarioService],
    declarations:[UsuarioComponent]
})
export class ModuloUsuario {
}



