import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import "./style.scss";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: <FaFacebookF />, path: "https://www.facebook.com/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/" },
  { icon: <FaTwitter />, path: "https://twitter.com/" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/" },
];

const navItems = ["Terms Of Use", "Privacy-Policy", "About", "Blog", "FAQ"];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <ul className="nav">
          {navItems.map((item) => (
            <li className="nav__item" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <div className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <ul className="social__icons">
          {socialLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
