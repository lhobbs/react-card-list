import React from 'react';
import Header from './Header.jsx';
import CardContainer from './CardContainer.jsx';
import { Colors } from './tokens.js';

const App = () => {
  return (
    <>
    <Header />
    <main>
      <CardContainer />
    </main>
    <style jsx>{`
        body {
          background: ${Colors.BEIGE};
        }
      `}
    </style>
    </>
  );
}

export default App;