import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AcceuilLionComponent } from "./pages/acceuil-lion/acceuil-lion.component";
import { FooterComponent } from './shared/footer-lion/footer.component';
import { HeaderComponent } from './shared/header-jean/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    AcceuilLionComponent,
    HeaderComponent,
    FooterComponent

],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
