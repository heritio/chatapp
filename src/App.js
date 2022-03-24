import React from 'react';


import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';
import './App.css';

function App() {
  
  return (
    <div className="app">
      <Router>
          <Routes>             
             <Route path="/" element={<WebcamCapture />}/>
             <Route path="preview" element={<Preview />}/>
             <Route path="/chats" element={<Chats/>}/>
          </Routes>

      </Router>
     


      
    </div>
  );
}

export default App;
