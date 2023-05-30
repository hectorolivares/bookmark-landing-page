import { useState } from "react";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header className="hidden lap:visible lap:flex lap:flex-row lap:justify-between lap:items-center w-full px-8 m-auto lap:max-w-[1464px] h-28 lap:mb-20">
        <img className="h-[25%]" src="/logo-bookmark.svg" alt="" />

        <ul className="flex flex-row justify-between items-center">
          <li>
            <a
              className="uppercase tracking-[4px] text-sm hover:text-bm-red transition duration-200 ease-in-out mr-8"
              href="#"
            >
              Features
            </a>
          </li>
          <li>
            <a
              className="uppercase tracking-[4px] text-sm hover:text-bm-red transition duration-200 ease-in-out mr-8"
              href="#"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              className="uppercase tracking-[4px] text-sm hover:text-bm-red transition duration-200 ease-in-out mr-8"
              href="#"
            >
              Contact
            </a>
          </li>
          <button className="uppercase tracking-[4px] text-sm font-medium text-white py-2 px-7 rounded-md border-2 border-bm-red bg-bm-red hover:bg-white hover:text-bm-red transition duration-200 ease-in-out">
            Login
          </button>
        </ul>
      </header>

      <header
        className={`${
          isActive ? "bg-opacity-0" : "bg-opacity-100 shadow-md"
        } fixed w-full flex items-center justify-between py-1 px-6 top-0 bg-white z-50 visible lap:hidden`}
      >
        <img
          className="h-[25%]"
          src={isActive ? "/logo-header.svg" : "/logo-bookmark.svg"}
          alt=""
        />

        <button
          onClick={handleClick}
          className={`hamburger hamburger--spin scale-50 ${
            isActive ? "is-active" : "active"
          } `}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </header>

      <div className={`${
          isActive ? "" : "hidden"
        } flex fixed w-full z-40 h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#28326C] bg-opacity-90 lap:hidden`}>
        <ul className="w-full flex flex-col text-white uppercase text-center items-center translate-y-32 text-2xl">
          <li className="border-y-[1px] border-gray-400 py-5 w-[75%]">
            <a className="tracking-[4px]" href="#">
              Features
            </a>
          </li>
          <li className="py-5 w-[75%]">
            <a className="tracking-[4px]" href="#">
              Pricing
            </a>
          </li>
          <li className="border-y-[1px] border-gray-400 py-5 w-[75%]">
            <a className="tracking-[4px]" href="#">
              Contact
            </a>
          </li>
          <button className="uppercase mt-7 tracking-[4px] font-medium text-white py-2 w-[75%] rounded-md border-2 border-white">
            Login
          </button>
        </ul>
      </div>
    </>
  );
};
