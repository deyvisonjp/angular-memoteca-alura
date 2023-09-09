import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent {
  listarPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) {};

  ngOnInit(): void {
    this.service.listar();
  }

}
