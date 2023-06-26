import Logo from "../UI/Logo/Logo";
import Navbar from "../UI/Navbar/Navbar";
import Profil from "../UI/Profil/Profil";
import "./header.scss";

function Header() {
  return (
    <div className="Header">
      <div className="left">
        <Logo />
        <Navbar />
      </div>
      <div className="right">
        <Profil />
      </div>
    </div>
  );
}

export default Header;
