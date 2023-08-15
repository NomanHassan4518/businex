import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Home1 from "./Components/Home1";
import Home2 from "./Components/Home2";
import About from "./Components/About";
import Service from "./Components/Service";
import Team from "./Components/Team";
import Blog from "./Components/Blog";
import BlogLeftSidebar from "./Components/BlogLeftSidebar";
import BlogRightSidebar from "./Components/BlogRightSidebar";
import BlogWithoutSidebar from "./Components/BlogWithoutSidebar";
import BlogLSidebar from "./Components/BlogLSidebar";
import BlogRSideBar from "./Components/BlogRSideBar";
import BlogDetails from "./Components/BlogDetails";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home1" element={<Home1 />}></Route>
          <Route path="/home2" element={<Home2 />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/service" element={<Service/>}></Route>
          <Route path="/team" element={<Team/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/blogleftsidebar" element={<BlogLeftSidebar/>}></Route>
          <Route path="/blogrightsidebar" element={<BlogRightSidebar/>}></Route>
          <Route path="/blogwithoutsidebar" element={<BlogWithoutSidebar/>}></Route>
          <Route path="/bloglsidebar" element={<BlogLSidebar/>}></Route>
          <Route path="/blogrsidebar" element={<BlogRSideBar/>}></Route>
          <Route path="/blogdetails" element={<BlogDetails/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
