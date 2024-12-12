import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Product} from '../../../../models/Product';
import {ProductsService} from '../../../../services/products.service';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Category} from '../../../../models/Category';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-product-modify',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './product-modify.component.html',
  styleUrl: './product-modify.component.css'
})
export class ProductModifyComponent implements OnInit {

  id: string = "";
  produit?:Product;
  categories?: Category[];
  productForm!: FormGroup;
  alertMessage: string | null = null;
  alertType: string = 'alert-success';


  constructor(private productService: ProductsService,private fb: FormBuilder,private categoryService:CategoryService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
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
      stock: ['',[Validators.required, Validators.min(0)]],
      images: this.fb.array([],Validators.required),
      colors: this.fb.array([],Validators.required),
      shortSpecifications: this.fb.array([],Validators.required),
      specificationDetails: this.fb.array([],Validators.required),
    });
    this.productService.getProductById(this.id).subscribe( {
      next:(product:Product | undefined)=>{
        if (product) {
          this.produit = product;
          if (this.produit) {

            this.productForm.patchValue({
              name: this.produit.name,
              brand: this.produit.brand,
              sellPrice: this.produit.sellPrice,
              costPrice: this.produit.costPrice,
              onSale: this.produit.onSale,
              specialPrice: this.produit.specialPrice,
              description: this.produit.description,
              category: this.produit.category.id,
              stock: this.produit.stock,
            });
            const imagesArray = this.productForm.get('images') as FormArray;
            this.produit.images.forEach((image) => {
              imagesArray.push(
                this.fb.group({
                  url: [image.url, Validators.required],
                })
              );
            });
            const colorsArray = this.productForm.get('colors') as FormArray;
            this.produit.colors.forEach((color) => {
              colorsArray.push(this.fb.control(color, Validators.required));
            });
            const shortSpecsArray = this.productForm.get(
              'shortSpecifications'
            ) as FormArray;
            this.produit.shortSpecifications.forEach((spec) => {
              shortSpecsArray.push(
                this.fb.group({
                  title: [spec.title, Validators.required],
                  description: [spec.description, Validators.required],
                })
              );
            });
            const detailedSpecsArray = this.productForm.get(
              'specificationDetails'
            ) as FormArray;
            this.produit.specificationDetails.forEach((spec) => {
              detailedSpecsArray.push(
                this.fb.group({
                  title: [spec.title, Validators.required],
                  description: [spec.description, Validators.required],
                })
              );
            });
          }
        }
      },
      error:(error:any)=>{
        console.error(error);
      }
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
    const payload = {
      name: formValue.name,
      brand: formValue.brand,
      description: formValue.description,
      sellPrice: formValue.sellPrice,
      costPrice: formValue.costPrice,
      specialPrice: formValue.specialPrice,
      onSale: formValue.onSale,
      stock: formValue.stock,
      colors: formValue.colors,
      categoryId: formValue.category,
      images: formValue.images || [],
      shortSpecifications: formValue.shortSpecifications || [],
      specificationDetails: formValue.specificationDetails || []
    };

    this.productService.updateProduct(payload,this.id).subscribe({
      next: (data: Product) => {
        console.log('Product modify successfully:', data);
        this.alertMessage = "Produit modifier avec succès !";
        this.alertType = 'alert-success';
      },
      error: (error: any) => {
        console.error('Error modify product:', error);
        this.alertMessage = "Erreur lors de la modification du produit. Veuillez réessayer.";
        this.alertType = 'alert-danger';
      }
    });



  }
  closeAlert(): void {
    this.alertMessage = null;
  }
}



