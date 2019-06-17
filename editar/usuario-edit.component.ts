import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormGroup } from '@angular/forms';



@Component({
    selector: 'app-usuario-edit',
    templateUrl: './usuario-edit.component.html',
    styleUrls: ['../usuario.component.scss']
})
export class UsuarioEditComponent implements OnInit {

    contato: any;

    constructor(private usuarioService: UsuarioService) { }

    ngOnInit() {

        this.contato = {};

    }

    update(frm: FormGroup) {

        this.usuarioService.update(this.contato).subscribe(resposta => {
            console.log(resposta);
            alert("Cadastro Atualizado!");

            frm.reset();


        });

    }





}