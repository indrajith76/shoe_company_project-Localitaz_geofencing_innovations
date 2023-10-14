import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-base-100 text-black border-b-2 sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <Link to="#">Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Shoes Categories</summary>
                <ul className="p-2">
                  <li>
                    <Link to="#">Men's Shoes</Link>
                  </li>
                  <li>
                    <Link to="#">Women's Shoes</Link>
                  </li>
                  <li>
                    <Link to="#">Kids' Shoes</Link>
                  </li>
                  <li>
                    <Link to="#">New Arrivals</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#" className="text-xl">
                <BsCart4 />
              </Link>
            </li>
            <li>
              <div className="dropdown dropdown-bottom dropdown-left"> 
                <label tabIndex={0} className="avatar">
                  <div className="w-7 rounded-full ring ring-offset-base-100 ring-offset-2">
                    <img src="https://www.thecakepalace.com.au/wp-content/uploads/2022/10/dummy-user.png" />
                  </div>
                </label> 
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <a>View Cart</a>
                  </li>
                  <li>
                    <a>Log Out</a>
                  </li>
                </ul>
              </div>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="h-full" src="https://1000logos.net/wp-content/uploads/2021/04/Foot-Shop-logo-500x281.png" alt="" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Shoes Categories</summary>
                <ul className="p-2">
                  <li>
                    <Link to="#">Men's Shoes</Link>
                  </li>
                  <li>
                    <Link to="#">Women's Shoes</Link>
                  </li>
                  <li>
                    <Link to="#">Kids' Shoes</Link>
                  </li>
                  <li>
                    <Link to="#">New Arrivals</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#" className="text-xl">
                <BsCart4 />
              </Link>
            </li>
            <li>
              <div className="dropdown dropdown-bottom dropdown-left"> 
                <label tabIndex={0} className="avatar">
                  <div className="w-7 rounded-full ring ring-offset-base-100 ring-offset-2">
                    <img src="https://www.thecakepalace.com.au/wp-content/uploads/2022/10/dummy-user.png" />
                  </div>
                </label> 
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <a>View Cart</a>
                  </li>
                  <li>
                    <a>Log Out</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
