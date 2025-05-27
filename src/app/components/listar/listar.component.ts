import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  usuarios: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers().subscribe(data => {
      this.usuarios = data;
    });
  }

  getUsers(): Observable<any> {
    this.usuarios = this.http.get<any[]>(this.apiUrl);
    return this.usuarios;
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
