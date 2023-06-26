import AddToCart from "components/cart/AddToCart";
import { Product } from "types";
import "./description.scss";

export interface ProductDescriptionProps {
  product: Product;
}

export function ProductDescription({ product }: ProductDescriptionProps) {
  return (
    <div className="Description">
      <p className="company">{product.enterprise}</p>
      <h1 className="title">{product.productName}</h1>
      <p className="desc">{product.desc}</p>
      <div className="price">
        <h4>
          {product.promotionPrice}
          <span>{product.reduction}</span>
        </h4>
        <h5 className="originalPrice">{product.realPrice}</h5>
      </div>
      <AddToCart product={product} />
    </div>
  );
}

export default ProductDescription;
