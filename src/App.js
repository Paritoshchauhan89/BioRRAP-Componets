import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
import './App.css'
import Guidance from "./pages/Guidance";
// import PreHeader from "./Components/PreHeader/PreHeader";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <PreHeader/> */}
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/guidance" element={<Guidance/>} />
        </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
