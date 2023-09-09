import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  //@Input -> pensamento vai receber informações do componente PAI (listarPensamento)
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'Contaudo do pensamento',
    autoria: 'Autor',
    modelo: 'Modelo'
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
