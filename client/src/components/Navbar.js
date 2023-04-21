import { useState } from "react";
import { MenuData } from "./MenuData";
import "../styles/NavbarStyles.css"
import { Link } from "react-router-dom";


function Navbar() {
  const [clicked, setClicked] = useState(false);
 
 
  // Create a new object with the additional structure
  const newMenuItem = {
    title: "user",
    url: "/Profile",
    cName: "nav-links",
    icon: "fa-solid fa-user"
  };

  // Concatenate the new object to the end of the MenuData array
  const updatedMenuData = MenuData.concat(newMenuItem);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="logo">Nbyula <i className="fab fa-react"></i></h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {updatedMenuData.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                <i className={item.icon}></i> {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
