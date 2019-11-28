import React from 'react';
// Import Bootstrap and its default variables
// import 'bootstrap/scss/bootstrap.scss';
import './custom.scss';

import Header from './components/header'
import HomePage from './pages/homepage'
import Footer from './components/footer'

function App() {
  return (
    <div className="App wrapper enable-header-transparent">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
