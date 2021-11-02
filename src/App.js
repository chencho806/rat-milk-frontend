import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Background from './components/Background';


function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
