import React from 'react'
import Header from './components/Header';
import PageFilter from './pages/PageFilter/PageFilter';
import PageHome from './pages/PageHome/PageHome';


function App() {
  return (
    <div> 
      <Header/>
      <PageFilter/>
      <PageHome/>
    </div> 
  );
}

export default App


