import "./Styles.css";

import { Link } from "react-router-dom";

const Nav = ({ navLinks }) => {
  return (
    <nav className="nav__container">
      <ul className="ul__container">
        {navLinks?.map((element, index) => {
          return (
            <li key={index}>
              <Link className="subtitulo subtitulo-hover" to={element.path}>
                {element.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
