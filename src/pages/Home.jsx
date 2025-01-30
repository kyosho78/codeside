import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tervetuloa koodi<br /> opetusluolaan.
      </motion.h1>
      <p className="text-lg text-gray-400 mt-4">
        Täällä saat perus ymmäryksen koodauksen saloista.
      </p>
      <div className="mt-6">
        <button className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-500 mr-4">
          Aloitetaan
        </button>
        <button className="px-6 py-3 bg-gray-700 rounded hover:bg-gray-600">
          Forumiin
        </button>
      </div>
    </div>
  );
};

export default Home;
