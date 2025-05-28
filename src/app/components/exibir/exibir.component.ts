import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exibir',
  standalone: true,
  imports: [],
  templateUrl: './exibir.component.html',
  styleUrl: './exibir.component.scss',
})
export class ExibirComponent {
  @Input() nome: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
  @Input() website: string = '';
}
