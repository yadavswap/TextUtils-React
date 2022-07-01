import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React ,{useState}from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode= () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success");

    }
  }
  return (
    <>
     <Router>
      <NavBar title="TextUtil" aboutText="About"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
        
          <Route path="/">
           <TextForm heading="Enter Text" showAlert={showAlert} mode={mode}  />
          </Route>
        </Switch>
       
       
      </div>
      </Router>
    </>
  );
}

export default App;
