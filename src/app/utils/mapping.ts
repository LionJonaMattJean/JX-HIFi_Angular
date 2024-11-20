import { Category } from '../models/Category';
import { Product } from '../models/Product';
import { SpecificationDetails } from '../models/SpecificationDetails';
import { ShortSpecification } from '../models/ShortSpecification';
import { Review } from '../models/Review';
import { Image } from '../models/Image';

// Function to map JSON data to Category objects
export function mapJsonToCategories(jsonData: any[]): Category[] {
  return jsonData.map(item => new Category(item.name, item.description));
}

// Function to map JSON data to Product objects
export function mapJsonToProducts(jsonData: any[]): Product[] {
  return jsonData.map(item => {
    const specificationDetails = item.specificationDetails.map((spec: any) => new SpecificationDetails(spec.title, spec.description));
    const shortSpecifications = item.shortSpecifications.map((spec: any) => new ShortSpecification(spec.title, spec.description));
    const reviews = item.reviews.map((review: any) => new Review(review.id, review.idProduct, review.idUser, review.star, review.title, review.review));
    const images = item.images.map((image: any) => new Image(image.idProduct, image.url));

    return new Product(
      item.name,
      item.description,
      item.sellPrice,
      item.costPrice,
      item.stock,
      item.category,
      item.colors,
      specificationDetails,
      shortSpecifications,
      reviews,
      images
    );
  });
}
