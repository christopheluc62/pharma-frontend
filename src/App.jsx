import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './reset.css';
import StyledApp from './Sapp';

function App() {
  return (
    <StyledApp>
      <div className='container'>
        <Header />
        <Main />
        <Footer />
      </div>
    </StyledApp>
  );
}

export default App;
