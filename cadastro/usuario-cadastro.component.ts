import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';





@Component({

    selector: 'app-usuario-cadastro',
    templateUrl: './usuario-cadastro.component.html',
    styleUrls: ['../usuario.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {
    public

    cadastro: any;
    contato: any;
    usuario: UsuarioService;
    animal: string;
    name: string;


    constructor(private usuarioService: UsuarioService,
        public dialog: MatDialog
        ) { }

    ngOnInit() {


        this.cadastro = {};


    }



    criar(frm: FormGroup) {

        this.usuarioService.criar(this.cadastro).subscribe(resposta => {
            console.log(resposta);

            alert("");

            frm.reset();
        });

    }

    



}





