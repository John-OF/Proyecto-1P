import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent {
  constructor(private router:Router)
  {
    
  }

  cambioPag(valor :string){
    this.router.navigate([valor]);
  }
}
