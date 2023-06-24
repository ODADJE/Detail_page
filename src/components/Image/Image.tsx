import "./image.scss";
import Mainsneaker from "../../assets/Main-sneaker.jpg";
type Imageprops = {
  image: string;
};
function Image(props: Imageprops) {
  return (
    <div className="Image">
      <div className="main-image">
        <img src={props.image} alt="" />
      </div>
      <div className="min-image"></div>
    </div>
  );
}

export default Image;
