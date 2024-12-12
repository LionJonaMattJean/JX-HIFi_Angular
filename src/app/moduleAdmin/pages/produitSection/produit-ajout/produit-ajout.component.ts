import { Component, OnInit} from '@angular/core';
import {Product} from '../../../../models/Product';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {CategoryService} from '../../../../services/category.service';
import {Category} from '../../../../models/Category';
import {ProductsService} from '../../../../services/products.service';



@Component({
  selector: 'app-produit-ajout',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    RouterLink,
    NgIf,
  ],
  templateUrl: './produit-ajout.component.html',
  styleUrl: './produit-ajout.component.css'
})
export class ProduitAjoutComponent implements OnInit {
  produit!:Product;
  categories?: Category[];
  productForm!: FormGroup;
  alertMessage: string ="";
  alertType: string = 'alert-success';
  alertTitle: string="";



  constructor(private categoryService:CategoryService,private fb: FormBuilder,private productService:ProductsService) {
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      brand: ['', [Validators.required, Validators.minLength(3)]],
      sellPrice: [null,[Validators.required,Validators.min(0)]],
      costPrice: [null,[Validators.required, Validators.min(0)]],
      onSale: [false],
      specialPrice: [null,[Validators.required,Validators.min(0)]],
      description: ['',Validators.required],
      category: ['', Validators.required],
      stock: [0,[Validators.required, Validators.min(0)]],
      images: this.fb.array([this.fb.group({url: ['', Validators.required]})]),
      colors: this.fb.array([this.fb.control('', Validators.required)]),
      shortSpecifications: this.fb.array([
        this.fb.group({
          title: ['', Validators.required],
          description: ['', Validators.required],
        }),
      ]), // Initialize with at least one default FormGroup
      specificationDetails: this.fb.array([
        this.fb.group({
          title: ['', Validators.required],
          description: ['', Validators.required],
        }),
      ]), // Initialize with at least one default FormGroup
    });
  }

  /**
   * Removes a specification detail from the specificationDetails FormArray at a given index.
   *
   * @param {number} i - The index of the specification detail to be removed.
   * @return {void} This method does not return a value.
   */
  removeSpecificationDetail(i: number):void {
    (this.productForm.get('specificationDetails') as FormArray).removeAt(i);
  }

  /**
   * Adds a new specification detail group to the 'specificationDetails' form array in the product form.
   * Each specification detail group includes 'title' and 'description' fields with required validators.
   *
   * @return {void}
   */
  addSpecificationDetail(): void {
    (this.productForm.get('specificationDetails') as FormArray).push(
      this.fb.group({ title: ['', Validators.required], description: ['', Validators.required] })
    );
  }

  removeSpecificationShort(i: number):void {
    (this.productForm.get('shortSpecifications') as FormArray).removeAt(i);
  }

  addSpecificationShort():void {
    (this.productForm.get('shortSpecifications') as FormArray).push(
      this.fb.group({ title: ['', Validators.required], description: ['', Validators.required] })
    );
  }

  removeImage(i: number) {
    (this.productForm.get('images') as FormArray).removeAt(i);
  }

  addImage() {
    (this.productForm.get('images') as FormArray).push(
      this.fb.group({ url: ['', Validators.required] })
    );
  }

  removeColor(i: number) {
    const colorsArray = this.productForm.get('colors') as FormArray;
    if (colorsArray.length > 0) {
      colorsArray.removeAt(i);

    }
  }

  addColor() {
    const colorsArray = this.productForm.get('colors') as FormArray;
    colorsArray.push(this.fb.control('', Validators.required));

  }
  getImagesControls() {
    return (this.productForm.get('images') as FormArray).controls;
  }

  getColorsControls() {

    return (this.productForm.get('colors') as FormArray).controls;
  }

  getShortSpecificationsControls() {
    return (this.productForm.get('shortSpecifications') as FormArray).controls;
  }

  getSpecificationDetailsControls() {
    return (this.productForm.get('specificationDetails') as FormArray).controls;
  }


  onSubmit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      this.alertMessage = "Formulaire Invalide, veuillez remplir tous les champs.";
      this.alertType = 'alert-warning';
      return;
    }

    const formValue = this.productForm.value;
    const selectedCategoryId = formValue.category;
    const payload={
      ...formValue,
      categoryId: selectedCategoryId
    }

    this.productService.createProduct(payload).subscribe({
      next: (data: Product) => {
        console.log('Product created successfully:', data);
        this.alertMessage = "Produit ajouté avec succès !";
        this.alertType = 'alert-success';
      },
      error: (error: any) => {
        console.error('Error creating product:', error);
        this.alertMessage = "Erreur lors de l'ajout du produit. Veuillez réessayer.";
        this.alertType = 'alert-danger';
      }
    });
    this.productForm.reset();
    const colorsArray = this.productForm.get('colors') as FormArray;
    const imagesArray = this.productForm.get('images') as FormArray;
    const shortSpecificationsArray = this.productForm.get('shortSpecifications') as FormArray;
    const specificationDetailsArray = this.productForm.get('specificationDetails') as FormArray;
    colorsArray.clear();
    imagesArray.clear();
    shortSpecificationsArray.clear();
    specificationDetailsArray.clear();
    this.addColor();
    this.addImage();
    this.addSpecificationShort();
    this.addSpecificationDetail();

  }
  closeAlert(): void {
    this.alertMessage = "";
  }

}
