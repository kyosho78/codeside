//Toimiva App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import MatrixRainingCode from "./components/MatrixRainingEffect.jsx";
import Home from "./staticpages/Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Csharp from "./staticpages/programming/Csharp.jsx";
import AsyncProgramming from "./staticpages/programming/AsyncProgramming.jsx";
import CsharpCondition from "./staticpages/programming/CsharpCondition.jsx";
import CsharpLoop from "./staticpages/programming/CsharpLoop.jsx";
import JavaScript from "./staticpages/programming/JavaScript.jsx";
import JavaScriptCondition from "./staticpages/programming/JavaScriptCondition.jsx";
import JavaScriptLoop from "./staticpages/programming/JavaScriptLoop.jsx";
import Python from "./staticpages/programming/Python.jsx";
import PythonCondition from "./staticpages/programming/PythonCondition.jsx";
import PythonLoop from "./staticpages/programming/PythonLoop.jsx";
import Sql from "./staticpages/programming/Sql.jsx";
import SqlCondition from "./staticpages/programming/SqlCondition.jsx";
import Html from "./staticpages/programming/Html.jsx";
import Css from "./staticpages/programming/Css.jsx";
import VisualStudio from "./staticpages/platforms/VisualStudio.jsx";
import VsCode from "./staticpages/platforms/VsCode.jsx";
import Git from "./staticpages/platforms/Git.jsx";
import Net from "./staticpages/platforms/Net.jsx";
import Django from "./staticpages/platforms/Django.jsx";
import Azure from "./staticpages/platforms/Azure.jsx";
import Dictionary from "./staticpages/dictionary/Dictionary.jsx";
import backgroundVideo from "./assets/background.mp4";
import Notes from "./Notes/notes.jsx"; 
import EditNotes from "./Notes/editNotes";
import AddNote from "./Notes/addNote";
import { useState,useEffect } from "react";
import ForumList from "./forum/FoorumiListaus.jsx"
import KetjutList from "./forum/KetjutList.jsx"
import ThreadView from "./forum/YksittäinenKetju.jsx";
import NewThreadForm from "./forum/UusiKetju.jsx";



// Background Video Component
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <Router>
      <div className="min-h-screen">
        {/* Show Matrix & Background Video on Home Page */}
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={
            <>
              <MatrixRainingCode className="absolute inset-0" />
              <BackgroundVideo />
             
              <Home />
            </>
          } />

            
          {/* Other Pages with Navbar */}
          <Route path="/login" element={<><Navbar /><Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/></>} />
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
          <Route path="/sql" element={<><Navbar /><Sql /></>} />
          <Route path="/sql-condition" element={<><Navbar /><SqlCondition /></>} />
          <Route path="/html" element={<><Navbar /><Html /></>} />
          <Route path="/css" element={<><Navbar /><Css /></>} />
          <Route path="/visual-studio" element={<><Navbar /><VisualStudio /></>} />
          <Route path="/vs-code" element={<><Navbar /><VsCode /></>} />
          <Route path="/git" element={<><Navbar /><Git /></>} />
          <Route path="/net" element={<><Navbar /><Net /></>} />
          <Route path="/django" element={<><Navbar /><Django /></>} />
          <Route path="/azure" element={<><Navbar /><Azure /></>} />
          <Route path="/dictionary" element={<><Navbar /><Dictionary /></>} />
          <Route path="/notes" element={<Notes isAuthenticated={isAuthenticated}/>} />
          <Route path="/edit-note/:id" element={<EditNotes />} />
          <Route path="/add-note" element={<AddNote />} /> 
          <Route path="/forum" element={<><ForumList /></>} />
          <Route path="/threads/:topicId" element={<KetjutList />} />
          <Route path="/thread/:threadId" element={<ThreadView />} />
          <Route path="/create-thread/:topicId" element={<NewThreadForm />} /> 
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
