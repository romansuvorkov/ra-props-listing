import React from 'react';
import './App.css';
import './css/main.css';
import Listing from './Listing';
import etsy from './data/etsy';

function App() {
  return (
    <div className="App">
      <Listing items={etsy}/>
    </div>
  );
}

export default App;
