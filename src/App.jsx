import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/destination" element={<Destinations />}></Route>
      <Route path="/crew" element={<Crew />}></Route>
      <Route path="/technology" element={<Technology />}></Route>
    </Routes>
  );
}
