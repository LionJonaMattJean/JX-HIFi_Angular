import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Category} from '../../../../models/Category';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-categories-ajout',
  standalone: true,
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './categories-ajout.component.html',
  styleUrl: './categories-ajout.component.css'
})
export class CategoriesAjoutComponent implements OnInit {
  category: Category = {
    id: "",
    name: '',
    description:''
  };
  categoryForm!:FormGroup;
  alertMessage: string='';
  alertType: string='';
  constructor(private categoryService:CategoryService,private fb:FormBuilder) { }
  ngOnInit() {
    this.categoryForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      description:['',[Validators.required,Validators.minLength(5)]]
    })
  }
  ajoutCategory() {
    if(this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      this.alertMessage = "Formulaire Invalide, veuillez remplir tous les champs.";
      this.alertType = 'alert-warning';
      return;
    }
      this.category={
        id: 'holder',
        name: this.categoryForm.get('name')?.value,
        description: this.categoryForm.get('description')?.value
      }
    this.categoryService.createNewCategory(this.category).subscribe({
      next:()=>{
        this.alertMessage="Catégorie ajouté avec succès !";
        this.alertType="alert-success";
      },
      error:()=>{
        this.alertMessage="Erreur lors de l'ajout de la Catégorie !"
        this.alertType="alert-danger";
      }
    });
    this.categoryForm.reset();

    }


  closeAlert() {
    this.alertMessage = '';
  }
}
