import { Component } from '@angular/core';
import { ListarComponent } from "../../components/listar/listar.component";

@Component({
  selector: 'app-main',
  imports: [ListarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
