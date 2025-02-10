import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import MatrixRainingCode from "./Components/MatrixRainingEffect.jsx";
import Home from "./Staticpages/Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import backgroundVideo from "./Assets/background.mp4";

function BackgroundVideo() {
  return (
    <video
      className="fixed top-0 right-0 w-1/2 h-full object-cover z-[-1] rounded-l-[50px] shadow-lg"
      style={{
        WebkitMaskImage: "linear-gradient(to left, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
        maskImage: "linear-gradient(to left, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
        filter: "blur(1px)",
      }}
      autoPlay
      loop
      muted
    >
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  );
}

function AppWrapper() {
  const location = useLocation();
  const showMatrixAndVideo = location.pathname === "/";

  // Musta tausta sivuille
  const blackBackgroundPages = [
    "/about",         // Ohjelmointi
    "/services",      // Alustat
    "/forum",         // Forum
    "/dictionary",    // Sanakirja
    "/notes",         // Muistiinpanot
    "/login",       // Login  
    "/signup",      // Signup
  ];

  const isBlackBackground = blackBackgroundPages.includes(location.pathname);

  return (
    <div className={`min-h-screen ${isBlackBackground ? "bg-black text-white" : ""}`}>
      {showMatrixAndVideo && <MatrixRainingCode className="absolute inset-0" />}
      {showMatrixAndVideo && <BackgroundVideo />}
      
      <Navbar />
      <div className={`flex flex-col ${isBlackBackground ? "bg-black text-white" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add other pages as needed */}
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
