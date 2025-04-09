/*
  Written by: Valter Backström
*/

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-start justify-center h-screen text-white pl-2 md:pl-16 lg:pl-24">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-left"
        initial={{ opacity: 0, y: -160 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tervetuloa koodi<br /> opetusluolaan.
      </motion.h1>
      <p className="text-lg text-gray-400 mt-4">
        Täällä saat perus ymmäryksen koodauksen saloista. <br />
        Käymme läpi perusteet ja edetään siitä eteenpäin <br />
        Paina aloitetaan joka vie sinut Ohjelmointi, C# osioon.
      </p>
      <div className="mt-6">
        <Link
          to="/csharp"
          className="bg-white !text-black font-semibold px-6 py-3 rounded-md hover:bg-[#56afe6] transition duration-300 inline-block"
        >
          Aloitetaan
        </Link>
      </div>
    </div>
  );
};

export default Home;
