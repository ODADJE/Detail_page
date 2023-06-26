import "./numberButton.scss";

interface NumberButtonProps {
  handleClickMinus: () => void;
  handleClickAdding: () => void;
  productNumber: number;
}
function NumberButton({
  handleClickMinus,
  handleClickAdding,
  productNumber,
}: NumberButtonProps) {
  return (
    <div className="NumberButton">
      <button className="button">
        <span className="sign" onClick={handleClickMinus}>
          -
        </span>
        <span className="number">{productNumber}</span>
        <span className="sign" onClick={handleClickAdding}>
          +
        </span>
      </button>
    </div>
  );
}

export default NumberButton;
