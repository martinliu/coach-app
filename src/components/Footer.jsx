import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> ⓒ {year} Martin Liu All copyright reserved. </p>
    </footer>
  );
}

export default Footer;
