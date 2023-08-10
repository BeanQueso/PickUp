import './Header.css';
import logo from "../logo.webp"
function Header() {
  return (
    <div className="Header-main">
      <header className="header">
        <h1 className="header-text">PickUp</h1>
        <img src={logo} className="App-logo"/>
      </header>
    </div>
  );
}

export default Header;