import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navBackground, setNavBackground] = React.useState(false);
  const handleShow = () => {
    if (window.scrollY > 150) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <nav className={navBackground ? "nav nav-background" : "nav"}>
      <img
        className="netflix-logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix Logo"
      />
      <img
        className="profile-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="profile "
      />
    </nav>
  );
};

export default Navbar;
