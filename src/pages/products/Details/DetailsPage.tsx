import ProductDescription from "../../../components/Products/Description/Description";

import Header from "components/Header/Header";
import { ProductImage } from "components/Products/Description/Image";
import "./detailPage.scss";

const data = {
  enterprise: "SNEAKER COMPANY",
  productName: "Fall Limited Edition Sneakers",
  desc: "Thes low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  promotionPrice: "$125.00",
  reduction: "50%",
  realPrice: "$250.00",
  displaybButton: true,
  images: [
    "assets/image1.jpg",
    "assets/image2.jpg",
    "assets/image3.jpg",
    "assets/image4.jpg",
  ],
};

function ProductDetailsPage() {
  return (
    <div className="DetailPage">
      <div className="container">
        <Header />
        <div className="presentation">
          <div className="imageSection">
            <ProductImage product={data} />
          </div>
          <div className="descriptionSection">
            <ProductDescription product={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
