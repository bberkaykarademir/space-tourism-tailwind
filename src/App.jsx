import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

export default function App() {
  return (
    <Routes>
      <Route path="/a" element={<Home />}></Route>
      <Route path="/b" element={<Destinations />}></Route>
      <Route path="/c" element={<Crew />}></Route>
      <Route path="/" element={<Technology />}></Route>
    </Routes>
  );
}
