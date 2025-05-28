import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-exibir',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './exibir.component.html',
  styleUrl: './exibir.component.scss'
})
export class ExibirComponent {
  @Input() user: any;
}
