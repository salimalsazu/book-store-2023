const Navbar = () => {
  return (
    // <header className="bg-black border-b border-gray-700">
    //   <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    //     {/* lg+ */}
    //     <nav className="flex items-center justify-between h-16 lg:h-20">
    //       <div className="flex-shrink-0">
    //         <a href="#" title="" className="flex">
    //           <img
    //             className="w-auto h-8 lg:h-10"
    //             src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg"
    //             alt=""
    //           />
    //         </a>
    //       </div>
    //       <button
    //         type="button"
    //         className="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800"
    //       >
    //         <svg
    //           className="w-6 h-6"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M4 6h16M4 12h16m-7 6h7"
    //           />
    //         </svg>
    //       </button>
    //       <div className="hidden md:flex md:items-center md:space-x-10">
    //         <a
    //           href="#"
    //           title=""
    //           className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
    //         >
    //           {" "}
    //           Home{" "}
    //         </a>
    //         <a
    //           href="#"
    //           title=""
    //           className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
    //         >
    //           {" "}
    //           Books{" "}
    //         </a>
    //         <a
    //           href="#"
    //           title=""
    //           className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
    //         >
    //           {" "}
    //           About{" "}
    //         </a>
    //         <a
    //           href="#"
    //           title=""
    //           className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
    //         >
    //           {" "}
    //           Login{" "}
    //         </a>
    //       </div>
    //     </nav>
    //     {/* xs to lg */}
    //     <nav className="min-h-screen px-4 py-10 text-center bg-black md:hidden">
    //       <button
    //         type="button"
    //         className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="w-6 h-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M6 18L18 6M6 6l12 12"
    //           />
    //         </svg>
    //       </button>
    //       <nav className="flex flex-col items-center mt-10 space-y-2">
    //         <a
    //           href="#"
    //           title=""
    //           className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
    //         >
    //           {" "}
    //           Home{" "}
    //         </a>
    //         <a
    //           href="#"
    //           title=""
    //           className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
    //         >
    //           {" "}
    //           Books{" "}
    //         </a>
    //         <a
    //           href="#"
    //           title=""
    //           className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
    //         >
    //           {" "}
    //           About{" "}
    //         </a>
    //         <a
    //           href="#"
    //           title=""
    //           className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
    //         >
    //           {" "}
    //           Login{" "}
    //         </a>
    //       </nav>
    //     </nav>
    //   </div>
    // </header>

    <header>
      {/* lg+ */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 lg:h-20">
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <a href="#" title="" className="text-base font-medium text-black">
                {" "}
                Home{" "}
              </a>
              <a href="#" title="" className="text-base font-medium text-black">
                {" "}
                Books{" "}
              </a>
              <a href="#" title="" className="text-base font-medium text-black">
                {" "}
                About{" "}
              </a>
            </div>
            <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img
                    className="w-auto h-8 lg:h-10"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 lg:hidden"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
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
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <a href="#" title="" className="text-base font-medium text-black">
                {" "}
                Sign in{" "}
              </a>
              <a
                href="#"
                title=""
                className="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full"
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* xs to lg */}
      <nav className="py-4 bg-white lg:hidden">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Menu
            </p>
            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
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
          </div>
          <div className="mt-6">
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                title=""
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                {" "}
                Home{" "}
              </a>
              <a
                href="#"
                title=""
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                {" "}
                Books{" "}
              </a>
              <a
                href="#"
                title=""
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                {" "}
                About{" "}
              </a>
            </div>
            <hr className="my-4 border-gray-200" />
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                title=""
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                {" "}
                Sign in{" "}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;