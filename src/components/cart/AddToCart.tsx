import AddButton from "components/UI/Buttons/AddButton";
import NumberButton from "components/UI/Buttons/NumberButton";
import { useState } from "react";
import { Product } from "types";

interface AddToCartProps {
  product: Product;
}

export default function AddToCart({ product }: AddToCartProps) {
  const [count, setCount] = useState(0);

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

  return (
    <div className="buttons">
      <NumberButton />
      <AddButton onClick={increment} />
    </div>
  );
}
