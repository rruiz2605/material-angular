import { Component, signal, viewChild } from '@angular/core';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { IMenuOption } from '@models/layout';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterLinkActive
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  sidenav = viewChild.required(MatSidenav);
  menuItems = signal<IMenuOption[]>([]);

  constructor() {
    this.menuItems.set([
      { icon: 'home', label: 'Dashboard', link: 'home' },
      { icon: 'groups', label: 'Clientes', link: 'clientes' },
      { icon: 'inventory', label: 'Productos', link: 'productos' },
      { icon: 'point_of_sale', label: 'Ventas', link: 'ventas' },
      { icon: 'analytics', label: 'Reportes', link: 'reportes' },
    ]);
  }

  open() {
    this.sidenav().open();
  }
}
