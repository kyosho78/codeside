
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import MatrixRainingCode from "./components/MatrixRainingEffect.jsx";
import Home from "./staticpages/Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import ResetPassword from "./ResetPassword";
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
import ForumList from "./Forum/aiheetListaus.jsx"
import KetjutList from "./Forum/ketjujenListaus.jsx"
import ThreadView from "./Forum/ketjuYksittainen.jsx";
import NewThreadForm from "./Forum/luoUusiKetju.jsx";


// Background video, written by Valter Backström
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

// Main App component with Navbar and Routes, written by Valter Backström
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <MatrixRainingCode className="absolute inset-0" />
            <BackgroundVideo />
            <Home />
          </>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/csharp" element={<Csharp />} />
        <Route path="/async-programming" element={<AsyncProgramming />} />
        <Route path="/csharp-condition" element={<CsharpCondition />} />
        <Route path="/csharp-loop" element={<CsharpLoop />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/javascript-condition" element={<JavaScriptCondition />} />
        <Route path="/javascript-loop" element={<JavaScriptLoop />} />
        <Route path="/python" element={<Python />} />
        <Route path="/python-condition" element={<PythonCondition />} />
        <Route path="/python-loop" element={<PythonLoop />} />
        <Route path="/sql" element={<Sql />} />
        <Route path="/sql-condition" element={<SqlCondition />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/visual-studio" element={<VisualStudio />} />
        <Route path="/vs-code" element={<VsCode />} />
        <Route path="/git" element={<Git />} />
        <Route path="/net" element={<Net />} />
        <Route path="/django" element={<Django />} />
        <Route path="/azure" element={<Azure />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/edit-note/:id" element={<EditNotes />} />
        <Route path="/add-note" element={<AddNote />} />
        <Route path="/forum" element={<><ForumList /></>} />
        <Route path="/threads/:topicId" element={<KetjutList />} />
        <Route path="/thread/:threadId" element={<ThreadView />} />
        <Route path="/create-thread/:topicId" element={<NewThreadForm />} /> 
      </Routes>
    </div>
  );
}

export default App;
