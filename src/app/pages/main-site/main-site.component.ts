import { Component } from '@angular/core';
import { AcceuilLionComponent } from '../acceuil-lion/acceuil-lion.component';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-main-site',
  standalone: true,
  imports: [
    AcceuilLionComponent,
    SharedModule,
    RouterOutlet
  ],
  templateUrl: './main-site.component.html',
  styleUrl: './main-site.component.css'
})
export class MainSiteComponent {

}
