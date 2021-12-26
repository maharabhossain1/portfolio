import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header./Header";
import Footer from "./components/Footer/Footer";
import DetailProject from "./components/DetailProject/DetailProject";
import Blogs from "./components/Blogs/Blogs";
import ExploreProjects from "./components/ExploreProjectcs/ExploreProjects";
import { useState } from "react";
import { useEffect } from "react";
import Logo from "./components/Logo/Logo";

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3700);
  }, []);
  return (
    <>
      {loader ? (
        <Logo />
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="home/#about" element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="exploreprojects" element={<ExploreProjects />} />
            <Route path="project/:id" element={<DetailProject />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
