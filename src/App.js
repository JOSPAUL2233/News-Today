import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FetchData from "./components/FetchData";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar style={{ position: "sticky" }} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/general" element={<FetchData cat="General" />} />
          <Route path="/business" element={<FetchData cat="Business" />} />
          <Route
            path="/entertainment"
            element={<FetchData cat="Entertainment" />}
          />
          <Route path="/health" element={<FetchData cat="Health" />} />
          <Route path="/science" element={<FetchData cat="Science" />} />
          <Route path="/sports" element={<FetchData cat="Sports" />} />
          <Route path="/technology" element={<FetchData cat="Technology" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
