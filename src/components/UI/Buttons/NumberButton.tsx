import { useEffect, useState } from "react";
import "./numberButton.scss";

function NumberButton() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (localStorage.getItem("articleNumber")) {
      setCount(() => {
        return Number(localStorage.getItem("articleNumber")!);
      });
    } else {
      setCount(0);
    }
  }, []);

  const handleClickMinus = () => {
    count > 1 &&
      setCount((pre_count) => {
        localStorage.setItem("articleNumber", (pre_count - 1).toString());
        return pre_count - 1;
      });
  };

  const handleClickAdding = () => {
    setCount((pre_count) => {
      localStorage.setItem("articleNumber", (pre_count + 1).toString());
      return pre_count + 1;
    });
  };
  return (
    <div className="NumberButton">
      <button className="button">
        <span className="sign" onClick={handleClickMinus}>
          -
        </span>
        <span className="number">{count}</span>
        <span className="sign" onClick={handleClickAdding}>
          +
        </span>
      </button>
    </div>
  );
}

export default NumberButton;
