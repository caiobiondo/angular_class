import { Component, OnInit, ViewChild, } from '@angular/core';
import { UsuarioService } from '../usuario.service';


import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';

import { AdminPermissionService } from '@app/admin/permissions/admin.permissions.service';
import { AdminService } from '@app/admin/admin.service';
import { ErrorService } from '@app/core/helpers/error-service';

import { DeleteUserComponent } from '../../admin/access-control/user/delete/delete.component';
import { UpdateUserComponent } from '../../admin/access-control/user/update/update.component';
import { ResetPasswordComponent } from '../../admin/access-control/user/reset-password/reset-password.component';

import { UserService } from '../../admin/access-control/user/user.service';

import { takeWhile } from 'rxjs/internal/operators/takeWhile';


@Component({

    selector: 'app-usuario-test',
    templateUrl: './usuario-test.component.html',
    styleUrls: ['../usuario.component.scss']
})
export class UsuarioTestComponent implements OnInit {
    usuario: any = [0] 
    @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filterList') filterList;

  columns = [ 'nomUsuario', 'desLogin', 'desEmail', 'nomCliente', 'situation', 'option'];

  alive = true;
  dataSource;
  user = [];
  noDataFounded: boolean;
  statusRequest: string;
  message: string;
  hasPermission = false;
  loading = true;
  translations;
  read_open: boolean;

  constructor(
    public dialog: MatDialog,
    private errorService: ErrorService,
    private service: UserService,
    private adminService: AdminService,
    private permission: AdminPermissionService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
   
    this.usuarioService.getUsuario().subscribe(
        response => {
          this.usuario = response
        }
      )
  }

 
  openModal(action, el) {
  
  }

  filterByActivate(e) {
   
  }

  makeSearch(value) {
    let searchValue = value.trim();
    searchValue = searchValue.toLowerCase();
    this.dataSource.filter = searchValue;
  }

  ngOnDestroy() {
    this.alive = false;
  }

  deleteContato(codUsuario) {

    this.usuarioService.delete(codUsuario).subscribe(res => {
      console.log(res);

      alert("Deletado OK!");      
    });
  }


}


    



   


