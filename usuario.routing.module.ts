import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';
import { UsuarioEditComponent } from './editar/usuario-edit.component';
import { UsuarioTestComponent } from './teste/usuario-test.component';

const appRoutes: Routes = [

    {
        path: '',
        component: UsuarioTestComponent
    },

    {
        path: 'add',
        component: UsuarioCadastroComponent
    },
    {
        path: 'edit',
        component: UsuarioEditComponent
    },
    {
        path: 'teste',
        component: UsuarioTestComponent
    }

];

@NgModule ({
    declarations: [],
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [ RouterModule ]
})
export class UsuarioRoutingModule { }