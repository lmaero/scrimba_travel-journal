import "./Header.css";
import world from "../assets/world.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__image" src={world} alt="An icon of the world" />
      <h1 className="header__title">my travel journal</h1>
    </header>
  );
}
