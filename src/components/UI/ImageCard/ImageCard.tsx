import "./imagecard.scss";

type CardProps = {
  img: string;
  click: boolean;
  alt: string;
  onClick: (event: React.MouseEvent<HTMLImageElement>) => void;
};

function ImageCard({ img, click, alt, onClick }: CardProps) {
  let setBorder = click ? "setBorder" : "";
  return (
    <div className="ImageCard" key={alt}>
      <img src={img} alt={alt} onClick={onClick} className={setBorder} />
    </div>
  );
}
export default ImageCard;
