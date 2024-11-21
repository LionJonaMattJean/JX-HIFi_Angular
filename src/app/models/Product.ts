import { Category } from './Category';
import { SpecificationDetails } from './SpecificationDetails';
import { ShortSpecification } from './ShortSpecification';
import { Review } from './Review';
import { Image } from './Image';



export interface Product {


  category: Category;
  id: string;
  name: string;
  description: string;
  sellPrice: number;
  costPrice: number;
  specialPrice: number;
  stock: number;
  colors: string[];
  specificationDetails: SpecificationDetails[];
  shortSpecifications: ShortSpecification[];
  images:Image[];
  reviews: Review[];

  onSale: boolean;

}
