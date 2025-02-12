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
        Täällä saat perus ymmäryksen koodauksen saloista.
      </p>
      <div className="mt-6">
        <button className="px-6 py-3 mr-4">
          <Link to="/csharp">Aloitetaan</Link>
        </button>
        <button className="px-6 py-3">
          Forumiin
        </button>
      </div>
    </div>
  );
};

export default Home;
