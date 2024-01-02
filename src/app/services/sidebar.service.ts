import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
    titulo: 'Dashboard-menu',
    icono: 'mdi mdi-gauge',
    submenu: [
      { titulo: 'Main', url: '/'},
      { titulo: 'Usuarios', url: '/users'},
    ]
  }
  ];

  constructor() { }
}
