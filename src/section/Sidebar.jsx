import {
  MdDashboardCustomize,
  MdOutlineMessage,
  MdLogout,
} from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { LiaToolsSolid } from "react-icons/lia";
import { IoSettingsSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const varients = {
  expanded: { width: "20%" },
  nonExpanded: { width: "90px" },
};

const navItems = [
  {
    name: "Dashboard",
    icon: MdDashboardCustomize,
  },
  {
    name: "Analytices",
    icon: SiSimpleanalytics,
  },
  {
    name: "Messages",
    icon: MdOutlineMessage,
  },
  {
    name: "Tools",
    icon: LiaToolsSolid,
  },
  {
    name: "Settings",
    icon: IoSettingsSharp,
  },
];

const Sidebar = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsExpanded(width >= 992); // Set isExpanded to true if the width is greater than or equal to 768, otherwise false
    };

    handleResize(); // Call handleResize initially to set the initial state
    window.addEventListener("resize", handleResize); // Add event listener for resize
    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, []);
  return (
    <motion.section
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={varients}
      className={`w-1/5 bg-white shadow-md h-screen flex flex-col justify-between items-center gap-10 relative ${
        isExpanded ? "py-3 px-6" : "py-2 px-2"
      }`}
    >
      <div className="w-full">
        <div className="flex flex-col justify-start items-center gap-8 py-5">
          {isExpanded ? (
            <div id="logo-box">
              <h1 className="text-4xl font-bold text-[#ff648b]">
                DEBUG <span className="italic text-blue-400">Entity</span>
              </h1>
            </div>
          ) : (
            <div className="">
              <h1 className="text-4xl font-bold text-[#ff648b]">
                D <span className="italic text-blue-400">E</span>
              </h1>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center items-center gap-5 mt-4 w-full">
          {navItems.map((item, index) => (
            <div
              key={item.name}
              className={`flex justify-start items-center gap-4 rounded-xl w-full cursor-pointer ${
                activeNavIndex === index ? "bg-[#ff648b99] text-black" : "text-black"
              } ${isExpanded ? "px-6 py-3" : "p-2 flex justify-center "}`}
              onClick={() => setActiveNavIndex(index)}
            >
              <div className="bg-blue-400 text-white p-3 rounded-full">
                <item.icon className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h3
                className={`text-[18px] font-medium ${
                  isExpanded ? "flex" : "hidden"
                }`}
              >
                {item?.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div
        className="bg-[#ff648b99] text-white hidden lg:flex cursor-pointer absolute top-[50%] right-[-15px] p-2 rounded-full hover:bg-[#ff648b] transition duration-200 "
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FaAngleRight />
      </div>

      <div className="flex flex-col w-full py-4 justify-center items-center bg-[#ff648b] rounded-lg gap-4 cursor-pointer">
        <div className="flex justify-center items-center gap-3">
          <MdLogout className="text-2xl text-white" />
          <span
            className={`text-xl font-semibold text-white ${
              isExpanded ? "flex" : "hidden"
            }`}
          >
            Logout
          </span>
        </div>
      </div>
    </motion.section>
  );
};

export default Sidebar;
