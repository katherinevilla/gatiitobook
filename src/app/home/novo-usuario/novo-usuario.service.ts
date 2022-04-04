import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Novousuario } from './novousuario';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http:HttpClient) { }

  cadastraNovoUsuario(novoUsuario:Novousuario){
    return this.http.post(`${API}/user/signup`, novoUsuario);
  }
  verificaUsuarioExistente(nomeUsuario:string){

return this.http.get(`${API}/user/exists/${nomeUsuario}`)
}

}



