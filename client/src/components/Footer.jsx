import { Link } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-100 mt-auto"
      style={{
        backgroundColor: "#0b0b0b",
        borderTop: "1px solid #1f1f1f",
      }}
    >
      <div className="container-fluid px-3 py-4">
        {/* Top Section - Logo & Links */}
        <div className="row g-4 mb-4">
          {/* Brand Section */}
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img
                src="/logo-icon.png"
                alt="ONE MORE REP"
                style={{ width: 32, height: 32, objectFit: "contain" }}
              />
              <span
                className="text-white fw-bold"
                style={{ letterSpacing: "0.5px", fontSize: "1.1rem" }}
              >
                ONE MORE REP
              </span>
            </div>
            <p className="text-secondary" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
              Transform your fitness journey with expert-led workout classes and personalized training programs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h6 className="text-white fw-semibold mb-3" style={{ letterSpacing: "0.3px" }}>
              Quick Links
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-secondary text-decoration-none footer-link"
                  style={{ fontSize: "0.9rem", transition: "all 0.3s ease" }}
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/programs"
                  className="text-secondary text-decoration-none footer-link"
                  style={{ fontSize: "0.9rem", transition: "all 0.3s ease" }}
                >
                  Programs
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/classes"
                  className="text-secondary text-decoration-none footer-link"
                  style={{ fontSize: "0.9rem", transition: "all 0.3s ease" }}
                >
                  Classes
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div className="col-6 col-md-2">
            <h6 className="text-white fw-semibold mb-3" style={{ letterSpacing: "0.3px" }}>
              My Account
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/classes/joined"
                  className="text-secondary text-decoration-none footer-link"
                  style={{ fontSize: "0.9rem", transition: "all 0.3s ease" }}
                >
                  My Classes
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="#membership"
                  className="text-secondary text-decoration-none footer-link"
                  style={{ fontSize: "0.9rem", transition: "all 0.3s ease" }}
                >
                  Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Powered By & Credits */}
          <div className="col-12 col-md-4">
            <h6 className="text-white fw-semibold mb-3" style={{ letterSpacing: "0.3px" }}>
              Powered By
            </h6>
            <div className="d-flex align-items-center gap-2 mb-3">
              <img src="/gemini.png" alt="Google Gemini AI" style={{ width: "24px", height: "24px" }} />
              <span className="text-white fw-semibold" style={{ fontSize: "0.95rem" }}>
                Google Gemini AI
              </span>
            </div>
            <p className="text-secondary mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
              This website is developed by{" "}
              <span className="text-white fw-semibold">Medd</span>.
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div
          className="pt-3"
          style={{
            borderTop: "1px solid #1f1f1f",
          }}
        >
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="text-secondary mb-0" style={{ fontSize: "0.85rem" }}>
                © {currentYear} ONE MORE REP. All rights reserved.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <a
                href="#"
                className="text-secondary text-decoration-none footer-link me-3"
                style={{ fontSize: "0.85rem", transition: "all 0.3s ease" }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-secondary text-decoration-none footer-link"
                style={{ fontSize: "0.85rem", transition: "all 0.3s ease" }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .footer-link:hover {
            color: #e50914 !important;
            transform: translateX(2px);
          }
        `}
      </style>
    </footer>
  );
}
