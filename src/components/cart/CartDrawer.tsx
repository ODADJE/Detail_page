import { Drawer } from "antd";

interface CardDrawerProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function CartDrawer({ onClose, isOpen }: CardDrawerProps) {
  let theCard = JSON.parse(localStorage.getItem("theCard")!);
  return (
    <div className="cartDrawer">
      <Drawer
        title="Shoppin List"
        placement="right"
        onClose={onClose}
        open={isOpen}
      >
        {theCard ? (
          <div>
            <p>{theCard.enterprise}</p>
            <p>{theCard.productName}</p>
            <p>Nombre: {theCard.productNumber}</p>
            {/* <button className="cancel" onClick={panier.onclick}>
              Cancel
            </button> */}
          </div>
        ) : (
          <p>Panier vide</p>
        )}
      </Drawer>
    </div>
  );
}
