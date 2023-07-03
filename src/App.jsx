import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";


export default function App() {
  return (
    <Routes>
      <Route path="/a" element={<Home />}></Route>
      <Route path="/" element={<Destinations />}></Route>
      <Route path="/b" element={<Crew />}></Route>
    </Routes>
  );
}
