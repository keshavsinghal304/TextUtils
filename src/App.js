// import logo from './logo.svg'; 
import  { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
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

  // const removeBodyClasses = () =>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }

  const toggleMode = ( /*cls*/) => {
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has be enable", "success");
      document.title = "Textutils - Dark Mode";
      // setInterval(() => {
      //   document.title = "Textutils in every 2 sec";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Textutils in every 1.5 sec";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has be enable", "success");
      document.title = "Textutils - Light Mode";
    }

  }


  return (
    <>
      <Router>

        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >

          <Routes>

            <Route exact path="/" element={
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
              } />
            <Route exact path="/about" element={<About mode={mode}/>} />  

           </Routes> 

        </div>

       </Router> 




    </>
  );
}

export default App;
