import "./profil.scss";
import profil from "../../../assets/profil.jpg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Drawer } from "antd";
import React, { useState } from "react";
type ShopProps = {
  shompNumber: number;
  onclick: () => void;
};
function Profil(panier: ShopProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [dopen, setDopen] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const showDrawer = () => {
    setDopen(true);
  };

  const onClose = () => {
    setDopen(false);
  };
  return (
    <div className="Profil">
      <Stack spacing={2} direction="row">
        <Badge badgeContent={panier.shompNumber} color="secondary">
          <ShoppingCartOutlinedIcon
            color="action"
            className="shop"
            onClick={showDrawer}
          />
        </Badge>
      </Stack>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Stack direction="row" spacing={3}>
          <Avatar alt="Remy Sharp" src={profil} />
        </Stack>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} className="menu">
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} className="menu">
          My account
        </MenuItem>
        <MenuItem onClick={handleClose} className="menu">
          Logout
        </MenuItem>
      </Menu>

      <Drawer
        title="Shoppin List"
        placement="right"
        onClose={onClose}
        open={dopen}
      >
        {panier.shompNumber ? (
          <div>
            <p>SNEAKER COMPANY</p>
            <p>Fall Limited Edition Sneakers</p>
            <p>Nombre: {localStorage.getItem("articleNumber")!}</p>
            <button className="cancel" onClick={panier.onclick}>
              Cancel
            </button>
          </div>
        ) : (
          <p>Panier vide</p>
        )}
      </Drawer>
    </div>
  );
}

export default Profil;
