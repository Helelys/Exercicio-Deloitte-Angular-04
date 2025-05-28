import { Component, OnInit } from '@angular/core';
import { ExibirComponent } from '../../components/exibir/exibir.component';
import { UsuarioService } from '../../services/usuarios-service.service';

@Component({
  selector: 'app-nova-pagina',
  imports: [ExibirComponent],
  templateUrl: './nova-pagina.component.html',
  styleUrl: './nova-pagina.component.scss',
})
export class NovaPaginaComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }
}
