import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import User from '../assets/images/client.jpg';
const Header = () => {
    return (
        <section className="w-full py-5 px-10 gap-4 bg-slate-300 rounded-lg flex justify-between    ">
            <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold ">Overview</h1>
            </div>
            <div className="flex items-center gap-5">
                <div className="bg-white py-2 px-2 flex justify-between items-center rounded-[5px]">
                    <input type="search" placeholder="Search..."  className="outline-none outline-focus-none"/>
                    <FaSearch className="text-gray-600" />
                </div>
                <img src={User} alt="" className="w-16 h-16 rounded-full object-cover"/>
            </div>
        </section>
    );
};

export default Header;