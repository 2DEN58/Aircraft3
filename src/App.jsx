import "./App.css";
import Home from "./pages/home/Home";
import Creations from "./pages/creations/Creations";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RealAircrafts from "./pages/realAircrafts/RealAircrafts";
import RSSFeed from "./pages/feeds/RSSFeed";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>} />
        <Route path="/creations" element={<Creations/>} />
        <Route path="/realAircrafts" element={<RealAircrafts />} />
        <Route path="/feeds" element={<RSSFeed />}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
