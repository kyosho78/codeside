import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import MatrixRainingCode from "./Components/MatrixRainingEffect.jsx";
import Home from "./Staticpages/Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Csharp from "./Staticpages/programming/csharp.jsx";
import AsyncProgramming from "./Staticpages/programming/AsyncProgramming.jsx";
import CsharpCondition from "./Staticpages/programming/CsharpCondition.jsx";
import CsharpLoop from "./Staticpages/programming/CsharpLoop.jsx";
import JavaScript from "./Staticpages/programming/JavaScript.jsx";
import JavaScriptCondition from "./Staticpages/programming/JavaScriptCondition.jsx";
import JavaScriptLoop from "./Staticpages/programming/JavaScriptLoop.jsx";
import Python from "./Staticpages/programming/Python.jsx";
import PythonCondition from "./Staticpages/programming/PythonCondition.jsx";
import PythonLoop from "./Staticpages/programming/PythonLoop.jsx";
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

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Show Matrix & Background Video on Home Page */}
        <Routes>
          <Route path="/" element={
            <>
              <MatrixRainingCode className="absolute inset-0" />
              <BackgroundVideo />
              <Navbar />
              <Home />
            </>
          } />

          {/* Other Pages with Navbar */}
          <Route path="/login" element={<><Navbar /><Login /></>} />
          <Route path="/signup" element={<><Navbar /><Signup /></>} />
          <Route path="/csharp" element={<><Navbar /><Csharp /></>} />
          <Route path="/async-programming" element={<><Navbar /><AsyncProgramming /></>} />
          <Route path="/csharp-condition" element={<><Navbar /><CsharpCondition /></>} />
          <Route path="/csharp-loop" element={<><Navbar /><CsharpLoop /></>} />
          <Route path="/javascript" element={<><Navbar /><JavaScript /></>} />
          <Route path="/javascript-condition" element={<><Navbar /><JavaScriptCondition /></>} />
          <Route path="/javascript-loop" element={<><Navbar /><JavaScriptLoop /></>} />
          <Route path="/python" element={<><Navbar /><Python /></>} />
          <Route path="/python-condition" element={<><Navbar /><PythonCondition /></>} />
          <Route path="/python-loop" element={<><Navbar /><PythonLoop /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
