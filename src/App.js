// import logo from './logo.svg';
// import About from './components/About';
import './App.css';
import Alert from './components/Alert';
import Navabar from './components/Navabar';
import TextForm from './components/TextForm';
import Light from './components/Light.jpg';
import Dark from './components/Dark_3.jpg';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";


// let name ="Gojo";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundImage = `url(${Dark})`;
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundImage = `url(${Light})`;
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navabar title="TextUtils" aboutText="About Us" mode={mode} changeMode={changeMode} />
      <Alert alert={alert} />

      {/* will use default props if value of about isn't send */}
      {/* <Navabar title="TextUtils" /> */}

      <div className="container my-4">
        <TextForm heading="Try TextUtils | Word counter , Character counter" mode={mode} />
        {/* <About /> */}
      </div>

    </>
    // {/* For implementing react router use following syntax */ }
    //     <Router>
    //     <Navabar title="TextUtils" aboutText="About Us" mode={mode} changeMode={changeMode} />
    //     <Alert  alert= {alert} />

    //     {/* will use default props if value of about isn't send */}
    //     {/* <Navabar title="TextUtils" /> */}

    //     <div className="container my-4">
    //       <Routes>   
    //       <Route exact path="/" element={<TextForm heading="Enter your text below.." mode={mode}/>} />
    //       <Route exact path="/about" element={<About />} />
    //       </Routes>
    //     </div>
    //  </Router>

  );

}

export default App;
