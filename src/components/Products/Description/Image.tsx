import Image from "components/Image/Image";
import ImageCard from "components/UI/ImageCard/ImageCard";
import { useState } from "react";
import { Product } from "types";
import "./description.scss";

export interface ProductImageProps {
  product: Product;
}

export function ProductImage({ product }: ProductImageProps) {
  const { images } = product;
  const [mainImg, setMainImg] = useState(() => images?.[0]);

  const handleClick = (path: string) => {
    setMainImg(path);
  };

  return (
    <>
      <Image image={mainImg} />
      <div className="imagecardDiv">
        {images.map((imagePath) => {
          return (
            <ImageCard
              path={imagePath}
              selected={mainImg === imagePath}
              onClick={handleClick}
              key={imagePath}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductImage;
