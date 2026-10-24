import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaGlobe,
  FaHeart,
  FaCopyright,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/Jishuk212/",
      className: "footer-social-github",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/",
      className: "footer-social-linkedin",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/",
      className: "footer-social-instagram",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/",
      className: "footer-social-facebook",
    },
    {
      name: "Twitter / X",
      icon: <FaTwitter />,
      url: "https://x.com/",
      className: "footer-social-twitter",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      url: "https://www.youtube.com/",
      className: "footer-social-youtube",
    },
    {
      name: "Website",
      icon: <FaGlobe />,
      url: "https://example.com/",
      className: "footer-social-website",
    },
  ];

  return (
    <footer className="main-footer">
      <div className="footer-social-section">
        <h3 className="footer-social-heading">Connect With Me</h3>

        <p className="footer-social-description">
          Follow me on social media to see my projects and updates.
        </p>

        <div className="footer-social-links">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className={social.className}
              aria-label={social.name}
              title={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="footer-social-icon">{social.icon}</span>
              <span className="footer-social-name">{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          <FaCopyright className="footer-copyright-icon" />
          {currentYear} Student Management System. All rights reserved.
        </p>

        <p className="footer-made-with">
          Made with <FaHeart className="footer-heart-icon" /> by{" "}
          <span className="footer-author-name">Jishu Singh</span>
        </p>

        <Link
          to="/"
          className="footer-back-to-top"
          aria-label="Back to home"
          title="Back to home"
        >
          <FaArrowUp className="footer-back-to-top-icon" />
          <span className="footer-back-to-top-text">Back to Home</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
