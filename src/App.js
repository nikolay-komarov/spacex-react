import React from 'react';

import Header from './components/header/header';
import Main from './components/main/main';
import Features from './components/features/features';
import Footer from './components/footer/footer';
// import Calendar from './components/calendar/calendar';
// import Details from './components/details/details';

import './css/style.css';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Features />

      {/* <Calendar /> */}
      {/* <Details /> */}

      <Footer />
    </>
  );
}

export default App;
