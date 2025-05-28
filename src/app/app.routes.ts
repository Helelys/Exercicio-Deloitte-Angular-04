import { Routes } from '@angular/router';
import { NovaPaginaComponent } from './pages/nova-pagina/nova-pagina.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'users/:id', component: NovaPaginaComponent }, // Rota para exibir usuários com ID
  { path: '**', redirectTo: '' } // Redireciona para a página principal se a rota não for encontrada,
];
