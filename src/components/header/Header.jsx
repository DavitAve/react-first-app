import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './style.css'

const Header = () => {
  const menu = [
    {
      id: "#6767132",
      name: "Home",
      path: "/",
    },
    {
      id: "#dsa676",
      name: "News",
      path: "/news",
    },
  ];
  const location = useLocation();
  return (
    <div className="header bg-white fixed w-full t-0 z-10">
      <div className="container py-4">
        <div className="header__nav flex justify-between items-center">
          <h1>
            <Link to="/" className="text-3xl">
              App
            </Link>
          </h1>
          <div>
            <ul className="flex items-center gap-4">
              {menu.map((el,index) => {
                return (
                  <Link to={el.path} key={index}>
                    <span className={`header__link ${location.pathname === el.path? '_active' : '_free'}`} >{el.name}</span>
                  </Link>
                );
              })}
              <li>
                <Link to="/user">
                  <span className={`header__link ${location.pathname === '/user'? '_active' : '_free'}`}>User</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
