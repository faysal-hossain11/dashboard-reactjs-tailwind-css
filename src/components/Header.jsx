import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import User from "../assets/images/client.jpg";
const Header = () => {
  return (
    <section className="w-full py-5 px-10 gap-4 bg-white shadow-md rounded-lg md:flex justify-between    ">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold flex justify-center mb-4 md:mb-0">
          Overview
        </h1>
      </div>
      <div className="sm:flex items-center gap-5 justify-between ">
        <div className="bg-slate-200 py-2 px-2 flex justify-between items-center rounded-[5px] mb-3 sm:mb-0">
          <input
            type="search"
            placeholder="Search..."
            className="outline-none outline-focus-none bg-slate-200 "
          />
          <FaSearch className="text-gray-600" />
        </div>
        <div className="flex justify-center">
          <img
            src={User}
            alt=""
            className="w-16 h-16 rounded-full object-cover cursor-pointer mr-3"
          />
          <div className="flex gap-3 items-center cursor-pointer">
            <div>
              <h5 className="text-xl font-semibold ">Hi, Jack</h5>
              <span className="font-semibold">Admin</span>
            </div>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
