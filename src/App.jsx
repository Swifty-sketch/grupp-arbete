// app.jsx
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { Navbar } from "./comp/Navbar";  // Named import for Navbar

import {
  PaperAirplaneIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
