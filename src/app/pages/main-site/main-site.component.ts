import { Component } from '@angular/core';
import { AcceuilLionComponent } from '../acceuil-lion/acceuil-lion.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-main-site',
  standalone: true,
  imports: [
    AcceuilLionComponent,
    SharedModule,
  ],
  templateUrl: './main-site.component.html',
  styleUrl: './main-site.component.css'
})
export class MainSiteComponent {

}
