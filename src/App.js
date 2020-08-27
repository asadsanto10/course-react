import React from 'react';
import './Asset/Bootstarp.css';
import './Style.scss';
import Purcehes from './Components/Purcehes/Purcehes';

function App() {
  return (
    <div className="App pt-5">
      <div className="main_conatiner">
        <h2 className="text-center mb-5">All Courses</h2>
        <Purcehes></Purcehes>
      </div>
    </div>
  );
}

export default App;
