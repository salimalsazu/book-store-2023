import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-black border-b border-gray-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <p className="text-white text-lg">BookStore</p>
            </a>
          </div>
          <button
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link
              to="/"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              {" "}
              Home{" "}
            </Link>
            <Link
              to="/books"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              {" "}
              All Books{" "}
            </Link>
            <Link
              to="/addBook"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              {" "}
              Add Book{" "}
            </Link>
            <Link
              to="/mybooks"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              {" "}
              My Book{" "}
            </Link>
            <Link
              to="/login"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              {" "}
              Sign In{" "}
            </Link>
            <button
              title=""
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              {" "}
              Logout{" "}
            </button>
            <Link
              to="/Registration"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              {" "}
              Sign Up{" "}
            </Link>
          </div>
        </nav>
        {/* xs to lg */}
        <nav className="min-h-screen px-4 py-10 text-center bg-black md:hidden">
          <button
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col items-center mt-10 space-y-2">
            <a
              href="#"
              title=""
              className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              {" "}
              Home{" "}
            </a>
            <Link
              to="/books"
              title=""
              className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              {" "}
              All Books{" "}
            </Link>
            <a
              href="#"
              title=""
              className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#"
              title=""
              className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              {" "}
              Sign In{" "}
            </a>
          </nav>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
