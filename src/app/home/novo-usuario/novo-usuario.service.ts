import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Novousuario } from './novousuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http:HttpClient) { }

  cadastraNovoUsuario(novoUsuario:Novousuario){
    return this.http.post('http:localhost:3000/user/signup' , novoUsuario);
  }
  verificaUsuarioExistente(nomeUsuario:string){
    return this.http.get(`htpp://localhost:3000/user/exists/${nomeUsuario}`)
}
}



