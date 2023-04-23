import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // title ne jyre dynamic banava mamnhgta hoy tyre aano use thay chhe
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Website!";
      // }, 4000);
      // setInterval(() => {
      //   document.title = "Instal TextUtils Now!";
      // }, 2500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>

      {/* <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
      />  */}
      {/* <Navbar/> */}
      {/* <BrowserRouter> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <BrowserRouter> */}
        <div className="container my-3">
          <Routes>
            {/* <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            } />
          <Route path="/about" element={<About />} /> */}
            {/* <About/> */}

            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text ti analyze below"
                  mode={mode}
                />
              }
            />

          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
