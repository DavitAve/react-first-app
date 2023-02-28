import { Link } from "react-router-dom";

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

  return (
    <div className="header bg-white fixed w-full t-0 z-10">
      <div className="container px-3 py-4">
        <div className="header__nav flex justify-between items-center">
          <h1>
            <Link to="/" className="text-3xl">
              App
            </Link>
          </h1>
          <div>
            <ul className="flex items-center gap-4">
              {menu.map((el) => {
                return (
                  <Link to={el.path} key={el.id}>
                    {el.name}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
