import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import OurChart from "../components/OurChart";
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import useImg from "../assets/images/client.jpg";
import client1 from "../assets/images/client.jpg";
import client2 from "../assets/images/client1.jpg";
import client3 from "../assets/images/client2.jpg";
import client4 from "../assets/images/client3.jpg";
import client5 from "../assets/images/client4.jpg";

const Main = () => {
  return (
    <section className="w-full mt-8 mr-8">
      <Header />
      {/* main section start here */}
      <div className="md:flex gap-5 mt-5">
        <div className="lg:w-2/3">
          <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
            <DashboardCard
              title="Facebook"
              persentage="+21.75%"
              count="82,2546"
              icon={<FaFacebookF />}
              textColor="text-blue-700"
              bgColor="bg-blue-200"
            />
            <DashboardCard
              title="Instagram"
              persentage="+21.75%"
              count="46,2546"
              icon={<LuInstagram />}
              textColor="text-red-600"
              bgColor="bg-[#FECACA]"
            />
            <DashboardCard
              title="Twitter"
              persentage="+21.75%"
              count="96,2546"
              icon={<FaTwitter />}
              textColor="text-green-600"
              bgColor="bg-[#BBF7D0]"
            />
          </div>
          <div className="mt-16 w-[90%]">
            <OurChart className="mt-64 bg-red-600" />
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className=" bg-white py-10 px-8 shadow-md rounded-lg mt-5 md:mt-0">
            <div>
              <img
                src={useImg}
                alt="userimage"
                className="w-32 h-32 m-auto rounded-full object-cover cursor-pointer"
              />
            </div>
            <div className="mt-8">
              <h3 className="font-semibold text-4xl text-center mb-2">
                Jack Anderson
              </h3>
              <p className="text-center text-xl">@jack_anderson</p>
            </div>
            <div className="flex justify-between mt-8">
              <div className="text-center">
                <h4 className="text-2xl font-semibold">193</h4>
                <span className="text-xl">Posts</span>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-semibold">17,536</h4>
                <span className="text-xl">Followers</span>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-semibold">274</h4>
                <span className="text-xl">Following</span>
              </div>
            </div>
          </div>
          <div className="py-10 px-8 rounded-lg bg-[#111111] mt-5 shadow-lg text-white">
            <div className="mb-10 flex justify-between items-center">
              <p className="text-xl font-semibold">Facebook Campaign</p>
              <button className="py-[6px] px-4 rounded-md bg-[#ff648b] border-none text-white font-medium">
                Active
              </button>
            </div>
            <div className="flex justify-between items-center mb-10 text-white">
              <div>
                <h4 className="text-3xl font-semibold">1,129</h4>
                <p className="font-medium ">Followers Today</p>
              </div>
              <div>
                <h4 className="text-3xl font-semibold">50,000</h4>
                <p className="font-medium ">Followers Goals</p>
              </div>
              <div>
                <h4 className="text-3xl font-semibold">10,000</h4>
                <p className="font-medium ">Followers Online</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <img
                  src={client1}
                  alt="client image"
                  className="w-14 h-14 rounded-full ml-[-18px]"
                />
                <img
                  src={client2}
                  alt="client image"
                  className="w-14 h-14 rounded-full ml-[-18px]"
                />
                <img
                  src={client3}
                  alt="client image"
                  className="w-14 h-14 rounded-full ml-[-18px]"
                />
                <img
                  src={client4}
                  alt="client image"
                  className="w-14 h-14 rounded-full ml-[-18px]"
                />
                <img
                  src={client5}
                  alt="client image"
                  className="w-14 h-14 rounded-full ml-[-18px]"
                />
              </div>
              <div className="text-center">
                <h5 className="text-3xl font-semibold text-white">+7,294</h5>
                <span className="text-medium">All Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
