import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Martin Liu, Inc.</p>
    </footer>
  );
}

export default Footer;
