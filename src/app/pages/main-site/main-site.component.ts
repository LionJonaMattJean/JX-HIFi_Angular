import { Component } from '@angular/core';
import {AcceuilLionComponent} from '../acceuil-lion/acceuil-lion.component';
import {FooterComponent} from '../../shared/footer-lion/footer.component';
import {HeaderComponent} from '../../shared/header-jean/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-site',
  standalone: true,
  imports: [
    AcceuilLionComponent,
    FooterComponent,
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './main-site.component.html',
  styleUrl: './main-site.component.css'
})
export class MainSiteComponent {

}
