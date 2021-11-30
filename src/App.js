import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header./Header";
import Footer from "./components/Footer/Footer";
import DetailProject from "./components/DetailProject/DetailProject";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="home/#about" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="project/:id" element={<DetailProject />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
