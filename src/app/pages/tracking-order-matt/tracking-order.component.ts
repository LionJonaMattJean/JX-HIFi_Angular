import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


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

  constructor(private router: ActivatedRoute){}

  ngOnInit(): void{
    this.router.queryParams.subscribe(params =>{
      this.NumConfirmation = params['orderNumber'];
    });
  }

  onSubmit(){

  }
}
