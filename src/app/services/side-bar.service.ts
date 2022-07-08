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
        { titulo: 'Main', url: '/' },
        { titulo: 'Mi progreso', url: 'progress' },
        { titulo: 'Graficas', url: 'grafica1' }
      ]
    }
  ]

  constructor() { }
}
