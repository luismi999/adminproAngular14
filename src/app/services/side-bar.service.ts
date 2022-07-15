import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  menu: any[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      subMenu: [
        { titulo: 'Main', url: '/dashboard' },
        { titulo: 'Mi progreso', url: 'progress' },
        { titulo: 'Graficas', url: 'grafica1' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'rxjs', url: 'rxjs' }
      ] 
    }
  ]

  constructor() { }
}
