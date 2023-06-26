import AddButton from "components/UI/Buttons/AddButton";
import NumberButton from "components/UI/Buttons/NumberButton";
import { useEffect, useState } from "react";
import { Product } from "types";

interface AddToCartProps {
  product: Product;
}

export default function AddToCart({ product }: AddToCartProps) {
  const [count, setCount] = useState(0);
  const [productNumber, setProductNumber] = useState(1);
  const increment = () => {
    if (count === 0) {
      setCount((count_c) => {
        localStorage.setItem("articlepanier", (count_c + 1).toString());
        return count_c + 1;
      });
    }
    console.log(localStorage.getItem("articlepanier"));
    let productCard = {
      enterprise: product.enterprise,
      productName: product.productName,
      productNumber: productNumber,
    };
    localStorage.setItem("theCard", JSON.stringify(productCard));
  };

  useEffect(() => {
    if (localStorage.getItem("theCard")) {
      let theCard = JSON.parse(localStorage.getItem("theCard")!);
      setProductNumber(() => {
        return theCard.productNumber;
      });
    } else {
      setProductNumber((pre_count) => {
        localStorage.setItem("articleNumber", pre_count.toString());
        return pre_count;
      });
    }
  }, []);

  const handleClickMinus = () => {
    console.log("test");
    productNumber > 1 &&
      setProductNumber((pre_count) => {
        return pre_count - 1;
      });
  };

  const handleClickAdding = () => {
    setProductNumber((pre_count) => {
      return pre_count + 1;
    });
  };

  return (
    <div className="buttons">
      <NumberButton
        handleClickAdding={handleClickAdding}
        handleClickMinus={handleClickMinus}
        productNumber={productNumber}
      />
      <AddButton onClick={increment} />
    </div>
  );
}
