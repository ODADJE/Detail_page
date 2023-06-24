import AddButton from "../UI/Buttons/AddButton";
import NumberButton from "../UI/Buttons/NumberButton";
import "./description.scss";
export interface DescProps {
  enterprise: string;
  productName: string;
  desc: string;
  promotionPrice: string;
  reduction: string;
  realPrice: string;
  displaybButton: boolean;
  onClick: () => void;
}

export function Description(props: DescProps) {
  return (
    <div className="Description">
      <p className="company">{props.enterprise}</p>
      <h1 className="title">{props.productName}</h1>
      <p className="desc">{props.desc}</p>
      <div className="price">
        <h4>
          {props.promotionPrice}
          <span>{props.reduction}</span>
        </h4>
        <h5 className="originalPrice">{props.realPrice}</h5>
      </div>
      {props.displaybButton && (
        <div className="buttons">
          <NumberButton />
          <AddButton onClick={props.onClick} />
        </div>
      )}
    </div>
  );
}

export default Description;
