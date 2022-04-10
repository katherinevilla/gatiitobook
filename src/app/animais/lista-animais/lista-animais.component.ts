import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais!: Animais;

  //animais$!: Observable<Animais>;

  constructor(
    private activatedRoute: ActivatedRoute
  ) //private usuarioService: UsuarioService,
  //private animaisService: AnimaisService
  {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.animais = this.activatedRoute.snapshot.data['animais'];
    });
  }
}

/*this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(userName);
      })
    );*/
