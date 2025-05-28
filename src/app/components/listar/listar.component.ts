import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExibirComponent } from '../exibir/exibir.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [ExibirComponent, CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  usuarios: any[] = [];
  usuarioExibidoId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers().subscribe(data => {
      this.usuarios = data;
    });
  }

  getUsers(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  ativarExibirPorId(id: number) {
    this.usuarioExibidoId = this.usuarioExibidoId === id ? null : id;
  }
}
