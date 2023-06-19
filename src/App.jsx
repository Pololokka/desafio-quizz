import "./App.css";

import Nav from "./Components/Nav/Index";
import { Outlet } from "react-router-dom";

import { navLinks } from "./Data/navLinks";

function App() {
  return (
    <>
      <Nav navLinks={navLinks} />
      <Outlet />
    </>
  );
}

export default App;
