import "./profil.scss";
import profil from "../../../assets/profil.jpg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import CartDrawer from "components/cart/CartDrawer";

function Profil() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [view, setView] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const showDrawer = () => {
    setView(true);
  };

  const onClose = () => {
    setView(false);
  };
  return (
    <div className="Profil">
      <Stack spacing={2} direction="row">
        <Badge
          badgeContent={Number(localStorage.getItem("articlepanier")!)}
          color="secondary"
        >
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
      <CartDrawer onClose={onClose} isOpen={view} />
    </div>
  );
}

export default Profil;
