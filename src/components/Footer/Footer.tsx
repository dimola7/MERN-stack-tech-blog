import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import fancyShape from "../../images/big-black-five-petal-flower.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="first-footer">
        <h1 className="logo">
          <div>
          <img
            src={fancyShape}
            alt="logo"
            style={{ width: "22px", margin: "auto", display: "inline-block" }}
          />
          TekBlog
          <div className="icons">
            <p>
              <a href="https://www.instagram.com/">
                <img
                  src={instagram}
                  alt="logo"
                  style={{
                    margin: "auto",
                    display: "inline-block",
                  }}
                />
              </a>
            </p>
            <p>
              <a href="https://www.twitter.com/">
                <img
                  src={twitter}
                  alt="logo"
                  style={{
                    margin: "auto",
                    display: "inline-block",
                  }}
                />
              </a>
            </p>
            <p>
              <a href="https://www.facebook.com/">
                <img
                  src={facebook}
                  alt="logo"
                  style={{
                    margin: "auto",
                    display: "inline-block",
                  }}
                />
              </a>
            </p>
          </div>
          </div>
        </h1>

        <div className="footer-grid-content">
          <h4>Contact Us</h4>
          <p>+234 (0) 1 3678 903 </p>
          <p>contact@tekblog.com </p>
          <p>1 Techi street, Victoria island, Lagos.</p>
        </div>
        <div className="footer-grid-content">
          <h4 >Customer Service</h4>
          <p>Contact Us </p>
          <p>Ordering & Payment </p>
          <p> FAQ </p>
        </div>
        <div className="footer-grid-content">
          <h4>Information</h4>
          <p>Work With Us </p>
          <p>Privacy Policy </p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footer-grid-content">
          <h4>Subscribe to TekBlog</h4>
          <p>Subscribe to our news letter </p>
          <div>
            <input
              className="input"
              type="email"
              name="subscibe"
              placeholder="Email Address"
            />
            <button className="button">subscribe</button>
          </div>
        </div>
      </div>

      <div className="second-footer">
        <p>Copyright ©2021 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
