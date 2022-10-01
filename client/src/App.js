import './App.css';
import React, { useState } from 'react';
import Menu from './components/menu';
import Homepage from './components/homepage';
import OrbitalElements from './components/orbitalElements';

function App() {
  const [showHomepage, setShowHomepage] = useState(true);
  const [showOrbitalElements, setShowOrbitalElements] = useState(false);

  const onClickHomepage = () => {
    setShowHomepage(true);
    setShowOrbitalElements(false);
  };

  const onClickOrbitalElements = async () => {
    setShowHomepage(false);
    setShowOrbitalElements(true);
  };

  return (
    <div className="base-page">
      <Menu
        onClickHomepage={onClickHomepage}
        onClickOrbitalElements={onClickOrbitalElements}
      />
      {showHomepage && <Homepage />}

      {showOrbitalElements && <OrbitalElements />}
    </div>
  );
}

export default App;
