import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Category} from '../../../../models/Category';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-categories-modify',
  standalone: true,
    imports: [
        FormsModule,

        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './categories-modify.component.html',
  styleUrl: './categories-modify.component.css'
})
export class CategoriesModifyComponent implements OnInit{
  id: string = "";
  category?: Category;
  categoryForm!:FormGroup;
  alertMessage: string='';
  alertType: string='';
  constructor(private categoryService:CategoryService,private fb:FormBuilder,private route:ActivatedRoute) {}

  ngOnInit() {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.categoryForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      description:['',[Validators.required,Validators.minLength(5)]]
    })
    this.categoryService.getCategoryById(this.id).subscribe( {
      next:(data:Category)=>{
        if(data) {
          this.category = data;
          if(this.category) {
            this.categoryForm.patchValue({
              name: this.category?.name,
              description: this.category?.description
            })
          }
        }
      }
    });
    this.categoryForm.patchValue({
      name: this.category?.name,
      description: this.category?.description
    });
  }

  modifyCategory() {
    if(this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      this.alertMessage = "Formulaire Invalide, veuillez remplir tous les champs.";
      this.alertType = 'alert-warning';
      return;
    }
    this.category={
      id: this.id,
      name: this.categoryForm.get('name')?.value,
      description: this.categoryForm.get('description')?.value
    }
    this.categoryService.updateCategory(this.category).subscribe({
      next:()=>{
        this.alertMessage="Catégorie modifier avec succès"
        this.alertType="alert-success";
      },
      error:(error:any)=>{
        console.error('Error modify product:', error);
        this.alertMessage = "Erreur lors de la modification de la catégorie. Veuillez réessayer.";
        this.alertType = 'alert-danger';
      }
      }

    )
  }

  closeAlert() {
    this.alertMessage = '';
  }
}
