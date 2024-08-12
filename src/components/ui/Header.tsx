import { Link } from "react-router-dom";
import appLogo from "../../assets/images/logo.png";
import { ShoppingCart, Moon } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-gradient-to-b from-pink-700 to-pink-900 text-white p-2 shadow-md">
      <nav className="container mx-auto flex items-center justify-between ">
        <Link to={"/"}>
          <div className="flex items-end">
            <img width="70px" src={appLogo} alt="media zone logo" />
            <p className="text-2xl font-serif font-extrabold  -my-2">
              Media Zone
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-5">
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-yellow-300"
                to={"/products"}
              >
                Products
              </Link>
            </li>
            <li>
              <a
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-yellow-300"
                href="#"
              >
                About
              </a>
            </li>
            <li className="relative">
              <Link
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-yellow-300"
                to={"/cart"}
              >
                <ShoppingCart size={24} />
              </Link>
              <span className="rounded-full absolute top-[-10px] left-[20px] bg-primary text-center size-[25px]">
                2
              </span>
            </li>

            <li>
              <button
                // onClick={handleToggleTheme}
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-yellow-300"
              >
                <Moon size={24} />
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menubar Button */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-5 mt-4">
          <li>
            <Link
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-yellow-300"
              to={"/products"}
              onClick={handleMenuToggle}
            >
              Products
            </Link>
          </li>
          <li>
            <a
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-yellow-300"
              href="#"
              onClick={handleMenuToggle}
            >
              About
            </a>
          </li>
          <li className="relative">
            <Link
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-yellow-300"
              to={"/cart"}
              onClick={handleMenuToggle}
            >
              <ShoppingCart size={24} />
            </Link>
            <span className="rounded-full absolute top-[-10px] left-[20px] bg-primary text-center size-[25px]">
              2
            </span>
          </li>
          <li>
            <button
              // onClick={handleToggleTheme}
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-yellow-300"
            >
              <Moon size={24} />
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
