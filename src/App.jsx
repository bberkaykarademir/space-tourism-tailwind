import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}