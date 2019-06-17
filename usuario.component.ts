import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuario: any = [0]
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    

    this.usuarioService.getUsuario().subscribe(
      response => {
        this.usuario = response
      }
    )
  }

  deleteContato(codUsuario) {

    this.usuarioService.delete(codUsuario).subscribe(res => {
      console.log(res);

      alert("Deletado OK!");      
    });
  }
  


}
