import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exibir',
  imports: [],
  templateUrl: './exibir.component.html',
  styleUrl: './exibir.component.scss'
})
export class ExibirComponent {
  @Input()
  nome: string = 'Texto de exemplo para exibição';
  @Input()
  email: string = 'Outro texto de exemplo para exibição';

  @Input()
  phone: string = 'Telefone de exemplo para exibição';

  @Input()
  website: string = 'https://www.exemplo.com.br';
}
