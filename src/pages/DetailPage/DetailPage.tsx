import Description from "../../components/Description/Description";
import Header from "../../components/Header/Header";
import Image from "../../components/Image/Image";
import ImageCard from "../../components/UI/ImageCard/ImageCard";
import mainImage from "../../assets/Main-sneaker.jpg";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

import "./detailPage.scss";
import { useEffect, useState } from "react";

const images = [
  {
    img: mainImage,
    click: true,
    alt: "mainImage",
  },
  { img: image1, click: false, alt: "image1" },
  { img: image2, click: false, alt: "image2" },
  { img: image3, click: false, alt: "image3" },
];
const data = {
  enterprise: "SNEAKER COMPANY",
  productName: "Fall Limited Edition Sneakers",
  desc: "Thes low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  promotionPrice: "$125.00",
  reduction: "50%",
  realPrice: "$250.00",
  displaybButton: true,
};
function DetailPage() {
  const [count, setCount] = useState(0);
  const [mainImg, setMainImg] = useState(mainImage);

  useEffect(() => {
    if (localStorage.getItem("articlepanier")) {
      setCount(() => {
        return Number(localStorage.getItem("articlepanier")!);
      });
    } else {
      setCount(0);
    }
  }, []);

  const increment = () => {
    if (count === 0) {
      setCount((count_c) => {
        localStorage.setItem("articlepanier", (count_c + 1).toString());
        return count_c + 1;
      });
    } else {
      setCount((count_c) => {
        localStorage.setItem("articlepanier", (count_c - 1).toString());
        return count_c - 1;
      });
    }
  };

  const imageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const imagec = event.currentTarget;
    images.forEach((image) => {
      if (image.alt === imagec.alt) {
        image.click = true;
      } else {
        image.click = false;
      }
    });

    setMainImg(imagec.src);
  };

  return (
    <div className="DetailPage">
      <div className="container">
        <Header shompNumber={count} onclick={increment} />
        <div className="presentation">
          <div className="imageSection">
            <Image image={mainImg} />
            <div className="imagecardDiv">
              {images.map((image) => {
                return (
                  <ImageCard
                    img={image.img}
                    click={image.click}
                    alt={image.alt}
                    onClick={imageClick}
                    key={image.alt}
                  />
                );
              })}
            </div>
          </div>
          <div className="descriptionSection">
            <Description
              enterprise={data.enterprise}
              productName={data.productName}
              desc={data.desc}
              promotionPrice={data.promotionPrice}
              reduction={data.reduction}
              realPrice={data.realPrice}
              displaybButton={data.displaybButton}
              onClick={increment}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
