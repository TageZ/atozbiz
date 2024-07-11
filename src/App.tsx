import { useState } from 'react'
import NavBar from './navbar'
import './App.scss'
import Home from './home';

function App() {

  const pages = ['Home', 'About', 'Services', 'Contact'];
  const [tab, setTab] = useState<string>(pages[0]);

  const Page = () => {
    switch (tab) {
      case 'Home':
        return <Home />;
      case 'About':
        // return <About />;
      case 'Services':
        // return <Services />;
      case 'Contact':
        // return <Contact />;
      default:
        return null;
    }
  };

  return (
    <>
      <NavBar pages={pages} setTab={setTab}/>
      <Page/>
    </>
  )
}

export default App
