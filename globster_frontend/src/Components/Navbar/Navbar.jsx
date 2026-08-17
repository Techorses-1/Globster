import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/logo/logo.png";
import home2logo from "../../assets/logo/logo.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Virtual Assistant", href: "/service/virtual-assistant" },
      { label: "Website Development", href: "/service/website-development" },
      { label: "E-commerce Development", href: "/service/ecommerce-development" },
      { label: "Vector Artwork", href: "/service/vector-art" },
      { label: "Embroidery Digitizing", href: "/service/embroidery" },
      { label: "Image & Video Editing", href: "/service/image-editing" },
      { label: "Product Mockups", href: "/service/product-mockup" },
      { label: "Data Processing", href: "/service/data-processing" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/aboutus" },
  { label: "Contact", href: "/contact" },
];

// All service paths for checking if any service page is active
const SERVICE_PATHS = [
  "/service/vector-art",
  "/service/embroidery",
  "/service/image-editing",
  "/service/product-mockup",
  "/service/data-processing",
  "/service/virtual-assistant",
  "/service/website-development",
  "/service/ecommerce-development",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  // Use the alternate logo only on /home2, default logo everywhere else
  const activeLogo = location.pathname === "/home2" ? home2logo : logo;

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when clicking outside the nav entirely
  useEffect(() => {
    const handleClickOutsideMobile = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false);
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideMobile);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideMobile);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close dropdown when route changes
  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
    setMobileDropdownOpen(false);
  };

  const toggleDesktopDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen((prev) => !prev);
  };

  const handleMobileLinkClick = () => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  };

  // Check if any service page is active
  const isServiceActive = () => {
    return SERVICE_PATHS.some(path => location.pathname === path);
  };

  // Check if link is active
  const isActiveLink = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    // For Services link - active if on /services OR any service page
    if (href === "/services") {
      return location.pathname === "/services" || isServiceActive();
    }
    return location.pathname === href;
  };

  return (
    <header className="navbar" ref={navRef}>
      <div className="navbar__inner">
        {/* Logo - left side with actual image */}
        <NavLink to="/" className="navbar__logo" onClick={handleMobileLinkClick}>
          <img src={activeLogo} alt="Globster" className="navbar__logo-image" />
        </NavLink>

        {/* Desktop Links - right side */}
        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div
                className={`navbar__item navbar__item--dropdown ${dropdownOpen ? "is-open" : ""
                  }`}
                key={link.label}
                ref={dropdownRef}
              >
                <button
                  type="button"
                  className={`navbar__link navbar__dropdown-trigger ${isActiveLink(link.href) ? "is-active" : ""
                    }`}
                  onClick={toggleDesktopDropdown}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <svg
                    className="navbar__chevron"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="navbar__dropdown-menu" role="menu">
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.href}
                      className={({ isActive }) =>
                        `navbar__dropdown-item ${isActive ? "is-active" : ""}`
                      }
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "is-active" : ""}`
                }
                key={link.label}
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Hamburger - mobile only, click triggered */}
        <div className="navbar__background">
          <button
            type="button"
            className={`navbar__menu-icon ${mobileOpen ? "is-active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`navbar__mobile-panel ${mobileOpen ? "is-open" : ""}`}>
        <nav className="navbar__mobile-links" aria-label="Mobile primary">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div
                className={`navbar__mobile-item navbar__mobile-item--dropdown ${mobileDropdownOpen ? "is-open" : ""
                  }`}
                key={link.label}
              >
                <button
                  type="button"
                  className={`navbar__mobile-link navbar__mobile-dropdown-trigger ${isActiveLink(link.href) ? "is-active" : ""
                    }`}
                  onClick={toggleMobileDropdown}
                  aria-expanded={mobileDropdownOpen}
                >
                  {link.label}
                  <svg
                    className="navbar__chevron"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="navbar__mobile-dropdown-menu">
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.href}
                      className={({ isActive }) =>
                        `navbar__mobile-dropdown-item ${isActive ? "is-active" : ""}`
                      }
                      onClick={handleMobileLinkClick}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `navbar__mobile-link ${isActive ? "is-active" : ""}`
                }
                key={link.label}
                onClick={handleMobileLinkClick}
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;