import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-divider" aria-hidden="true" />
      <div className="footer-bottom">
        <p className="copy">
          © {year}{" "}
          <span className="footer-brand">
            <span className="celeste">Gerald</span>
            <span className="rosa">.Dev</span>
          </span>{" "}
          — All rights reserved.
        </p>
        <p className="footer-sub">Diseñado y desarrollado en Argentina</p>
      </div>
    </footer>
  );
}