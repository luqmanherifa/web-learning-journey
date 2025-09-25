import logoImg from "/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="border-b border-gray-100">
      <div className="mx-auto flex h-[3.5rem] max-w-7xl justify-between text-gray-50">
        <div className="flex flex-row gap-5">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <img src={logoImg} alt="image" className="w-6 rounded-full" />
              <p className="text-lg font-bold text-gray-800 hover:text-blue-600">
                Sixdeux
              </p>
            </a>
          </div>

          <nav className="flex items-center gap-5 text-sm font-semibold text-gray-800">
            <div>
              <a
                href="/"
                className="text-left text-sm font-semibold text-gray-700 hover:text-blue-600"
              >
                Home
              </a>
            </div>
            <div>
              <a
                href="/business"
                className="text-left text-sm font-semibold text-gray-700 hover:text-blue-600"
              >
                Business
              </a>
            </div>
          </nav>
        </div>

        <div className="flex flex-row gap-2">
          <div className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="simple-search"
                className="block w-full rounded-full border border-gray-300 bg-gray-50 p-2.5 py-2 ps-5 text-sm text-gray-900"
                placeholder="Search business..."
                disabled
              />
            </div>
            <button
              type="submit"
              className="ms-2 rounded-full bg-yellow-400 p-2.5 text-sm font-medium text-white hover:bg-yellow-500"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>

          <div className="flex w-40 justify-end">
            <div>
              <div className="mt-2 flex justify-end">
                <button
                  id="dropdownInformationButton"
                  data-dropdown-toggle="dropdownInformation"
                  className="inline-flex items-center rounded-full bg-yellow-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-500"
                  type="button"
                  onClick={toggleDropdown}
                >
                  <span className="line-clamp-1">Hanni Pham</span>
                  <svg
                    className="ml-2.5 h-2.5 w-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </div>

              {isDropdownOpen && (
                <div
                  id="dropdownInformation"
                  className="relative z-10 mt-2 w-44 divide-y divide-gray-100 rounded-lg border border-gray-300 bg-white"
                >
                  <div className="px-4 py-3 text-sm text-gray-900">
                    <div className="flex gap-2">
                      <span className="line-clamp-1 font-semibold">
                        Hanni Pham
                      </span>
                    </div>
                  </div>
                  <ul
                    className="py-1 text-sm text-gray-700"
                    aria-labelledby="dropdownInformationButton"
                  >
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Dashboard
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      method="post"
                      href="#"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Log out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
