import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "../src/pages/Home";
import CourseDetails from "../src/pages/CourseDetails";
import Rates from "../src/pages/Rates";
import BookATeeTime from "../src/pages/BookTeeTime";
import ContactUs from "../src/pages/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/book-tee-time" element={<BookATeeTime />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
