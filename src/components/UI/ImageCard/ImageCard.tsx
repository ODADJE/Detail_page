import { click } from "@testing-library/user-event/dist/click";
import "./imagecard.scss";
//import mainImage from "../../../assets/Main-sneaker.jpg";

type CardProps = {
  img: string;
  click: boolean;
  alt: string;
  onClick: (event: React.MouseEvent<HTMLImageElement>) => void;
};

function ImageCard({ img, click, alt, onClick }: CardProps) {
  let setBorder = "";
  click ? (setBorder = "setBorder") : (setBorder = "");
  return (
    <div className="ImageCard">
      <img src={img} alt={alt} onClick={onClick} className={setBorder} />
    </div>
  );
}
export default ImageCard;
