import logo from "../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Alrededor de los Estados Unidos"
      />
    </header>
  );
}
