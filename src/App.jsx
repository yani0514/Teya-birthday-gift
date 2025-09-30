import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import HappyBirthday from './components/HappyBirthday';
import WishCard from './components/WishCard';
import Wishes from './components/Wishes';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    console.log("hui")
  }, [])

  // Use basename only in production (when deployed to GitHub Pages)
  const basename = import.meta.env.PROD ? "/Teya-birthday-gift" : "/";

  return (
     <Router basename={basename}>
        <Routes>
          <Route path='/' element = {<HappyBirthday />}></Route>
          <Route path='/wishCard' element = {<WishCard />}></Route>
          <Route path= '/wishes' element = {<Wishes />}></Route>
        </Routes>
      </Router>
  );
}

export default App