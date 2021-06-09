import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>Made By Rajdeep Sarkar</p>
    </footer>
  );
}

export default Footer;
