import { Component } from '@angular/core';
import {AcceuilLionComponent} from '../acceuil-lion/acceuil-lion.component';
import {FooterComponent} from '../../shared/footer-lion/footer.component';
import {HeaderComponent} from '../../shared/header-jean/header.component';

@Component({
  selector: 'app-main-site',
  standalone: true,
  imports: [
    AcceuilLionComponent,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './main-site.component.html',
  styleUrl: './main-site.component.css'
})
export class MainSiteComponent {

}
