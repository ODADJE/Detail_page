import Logo from "../UI/Logo/Logo";
import Navbar from "../UI/Navbar/Navbar";
import Profil from "../UI/Profil/Profil";
import "./header.scss";
type HeaderProps = {
  shompNumber: number;
  onclick: () => void;
};
function Header(shop: HeaderProps) {
  return (
    <div className="Header">
      <div className="left">
        <Logo />
        <Navbar />
      </div>
      <div className="right">
        <Profil shompNumber={shop.shompNumber} onclick={shop.onclick} />
      </div>
    </div>
  );
}

export default Header;
