import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Teacher from "./Pages/Teacher";
import Student from "./Pages/Student";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Logout from "./Pages/Logout";
import NotFound from "./Pages/NotFound";
import Students from "./Pages/Students";
import TakeTest from "./Pages/TakeTest";
import Results from "./Pages/Results";
import CreateTest from "./Pages/CreateTest";
import Tests from "./Pages/Tests";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/students" element={<Students />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/take-test/:testId" element={<TakeTest />} />
        <Route path="/results" element={<Results />} />
        <Route path="/create-test" element={<CreateTest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;