import React from 'react';

import Head from './Head/Head';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import './css/reset.css';
import './css/media-queries.css';
import './css/vars.css'


function App() {
  return (
    <div className='container'>
      <Head />
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
