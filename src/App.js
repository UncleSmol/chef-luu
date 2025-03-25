import React, { useState } from 'react';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import MyWork from './components/MyWork/MyWork';
import Connect from './components/Connect/Connect';
import About from './components/About/About';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  // Function to change the active page
  const navigateTo = (page) => {
    setActivePage(page);
    // Scroll to top when changing pages
    window.scrollTo(0, 0);
  };

  // Render the active page based on state
  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Homepage navigateTo={navigateTo} />;
      case 'work':
        return <MyWork />;
      case 'about':
        return <About />;
      case 'contact':
        return <Connect />;
      default:
        return <Homepage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="App">
      <Header navigateTo={navigateTo} activePage={activePage} />
      {renderActivePage()}
    </div>
  );
}

export default App;
