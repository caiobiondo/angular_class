import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';
import { FormsModule } from '@angular/forms';
import { UsuarioEditComponent } from './editar/usuario-edit.component';
import { UsuarioTestComponent } from './teste/usuario-test.component';
import { ShareModule } from '../../app/shared/shared.module';







@NgModule({
  declarations: [UsuarioComponent, UsuarioCadastroComponent, UsuarioEditComponent, UsuarioTestComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ShareModule,
 
   


  ],

  
})
export class UsuarioModule { }
