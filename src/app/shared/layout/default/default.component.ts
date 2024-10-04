import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    HeaderComponent,
    MenuComponent
  ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export default class DefaultComponent {

}
