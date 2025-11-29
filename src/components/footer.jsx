import "../styles/footer.css";
import logo from "../assets/images/download.png"

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

           <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
            <span>HiringBae</span>
          </div>
          <p>Building the future of work with AI employees<br />that actually work.</p>
        </div>

        <div className="footer-links">

          <div className="footer-column">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">AI Employees</a>
            <a href="#">Pricing</a>
            <a href="#">Integrations</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Press</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Documentation</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2024 HiringBae. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>

    </footer>
  );
}
