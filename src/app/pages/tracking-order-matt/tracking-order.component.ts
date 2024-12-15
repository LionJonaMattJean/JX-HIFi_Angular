import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TrackingService } from '../../services/tracking.service';


@Component({
  selector: 'app-tracking-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tracking-order.component.html',
  styleUrl: './tracking-order.component.css'
})
export class TrackingOrderComponent {
  NumConfirmation: string = '';
  orderNumber: string ='';
  email: string = '';

  constructor(private router: ActivatedRoute,
    private trackingService: TrackingService){}

    confirmTracking(){
      this.trackingService.startTracking(this.orderNumber, this.email).subscribe({
        next: (response) =>{
          console.log("Suivi de commande confirmé", response);
        },
        error:(err) =>{
          console.error('Erreur lors du démarrage du suivi', err);
        },
      });
    }

  ngOnInit(): void{
    this.router.queryParams.subscribe(params =>{
      this.NumConfirmation = params['orderNumber'];
    });
  }

  onSubmit(){

  }
}
