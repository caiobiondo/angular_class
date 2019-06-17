import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResultListItem, ResultItem, ResultItem_u } from './usuario.model';
import { environment } from './enviroment';





@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private httpCliente: HttpClient,
  ) { }

  
  getUsuario(): Observable<ResultListItem> {
    return this.httpCliente.get<ResultListItem>(environment.api_find, { params: { viewNumber: '1', sitUsuario: 'A' } });

  }

  criar(cadastro): Observable<ResultItem> {
    return this.httpCliente.post<ResultItem>(environment.api_add, cadastro);
  }

  delete(codUsuario: string): Observable<ResultItem> {
    return this.httpCliente.post<ResultItem>(environment.api_delete, { codUsuario: codUsuario });
  }

  update(contato): Observable<ResultItem_u> {
    return this.httpCliente.post<ResultItem_u>(environment.api_update,  contato);
  }
}
