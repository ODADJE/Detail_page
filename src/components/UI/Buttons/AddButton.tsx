import "./addButton.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

type buttonAdd = {
  onClick: () => void;
};
function AddButton(props: buttonAdd) {
  return (
    <div className="AddButton">
      <button className="button" onClick={props.onClick}>
        <ShoppingCartOutlinedIcon /> ADD TO CART
      </button>
    </div>
  );
}

export default AddButton;
