import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import MatrixRainingCode from "./Components/MatrixRainingEffect.jsx.jsx";
import Home from "./staticpages/Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import backgroundVideo from "./assets/background.mp4";

function App() {
  return (
    <Router>
    <div className="min-h-screen">
      <MatrixRainingCode className="absolute inset-0" />

        {/* Video Background on the Right Side */}
        <video
  className="fixed top-0 right-0 w-1/2 h-full object-cover z-[-1] rounded-l-[50px] shadow-lg"
  style={{
    WebkitMaskImage: "linear-gradient(to left, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
    maskImage: "linear-gradient(to left, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
    filter: "blur(1px)", 
  }}
  autoPlay
  loop
  muted
>
  <source src={backgroundVideo} type="video/mp4" />
</video>

        
        {/* Navbar and Routes */}
      <div className="flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
