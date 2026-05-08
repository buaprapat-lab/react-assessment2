import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-end py-6 px-10 border-b border-gray-300">
      <ul className="flex space-x-8 text-wl font-bold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "text-gray-400 hover:text-black transition-colors"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/owner"
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "text-gray-400 hover:text-black transition-colors"
            }
          >
            Owner
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
