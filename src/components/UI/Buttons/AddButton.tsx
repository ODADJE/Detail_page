import "./addButton.scss";
import Button from "@mui/material/Button";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
function AddButton() {
  return (
    <div className="AddButton">
      <Button
        variant="contained"
        startIcon={<ShoppingCartOutlinedIcon />}
        className="button"
      >
        Add to cart
      </Button>
    </div>
  );
}

export default AddButton;
