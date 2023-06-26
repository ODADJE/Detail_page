import "./imagecard.scss";

type ImageCardProps = {
  path: string;
  selected: boolean;
  onClick: (selectedPath: string) => void;
};

function ImageCard({ path, selected, onClick }: ImageCardProps) {
  let setBorder = selected ? "setBorder" : "";

  const handleClick = () => {
    onClick(path);
  };

  return (
    <div className="ImageCard">
      <img
        src={path}
        alt="Product"
        onClick={handleClick}
        className={setBorder}
      />
    </div>
  );
}
export default ImageCard;
