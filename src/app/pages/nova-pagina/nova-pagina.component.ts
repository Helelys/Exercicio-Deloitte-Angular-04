import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ExibirComponent } from '../../components/exibir/exibir.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nova-pagina',
  standalone: true,
  imports: [ExibirComponent, CommonModule],
  templateUrl: './nova-pagina.component.html',
  styleUrl: './nova-pagina.component.scss',
})
export class NovaPaginaComponent implements OnInit {
  user: any;
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.http.get<any>(`${this.apiUrl}/${id}`).subscribe((data) => {
        this.user = data;
      });
    });
  }
}
