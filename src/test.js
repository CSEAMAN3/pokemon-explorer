import "./reset";
import "./App.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import axios from "axios";
import { useState } from "react";

export default function test() {
  const [form, setForm] = useState({ name: "" });

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
