import "../styles/navbar.css";
import logo from "../assets/images/download.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          <img src={logo} className="logo-img" alt="logo" height="20" width="20" />
          <span>Hiringbae</span>
        </div>

        <ul className="nav-links">
          <li><a href="https://hiringbae.com/about" target="_blank">About</a></li>
          <li><a href="https://hiringbae.com/products" target="_blank">Products</a></li>
          <li><a href="https://hiringbae.com/hiring-process" target="_blank">Hiring Process</a></li>
          <li><a href="#">Blog</a></li>
        </ul>

        <button className="nav-btn">Reach out</button>

      </div>
    </nav>
  );
}
