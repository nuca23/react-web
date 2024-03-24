import React,{Fragment} from "react";
import ReactDOM from "react-dom/client";
import {BrowseRouter,Routes,route,useNavigate} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <Fragment>
      <BrowseRouter>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route  path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />

        </Routes>
      </BrowseRouter>
    </Fragment>
    
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);