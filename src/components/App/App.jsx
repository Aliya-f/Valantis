// require('dotenv').config(); 
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from '../Cards/Cards';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.jsx';

function App() {
  const [currentUser, setCurrentUser] = React.useState('');

  return (

    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Movies />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;