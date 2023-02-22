import './App.css';
import Home from './Routes/Home';
import { ChakraProvider } from '@chakra-ui/react';

import { Link, Routes, Route } from 'react-router-dom';
import MostLiked from './Routes/MostLiked';
import Shared from './Routes/Shared';
import UserLogin from './Routes/UserLogin';
import NewUser from './Routes/NewUser';


function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <div className='wrapper'>
        <header className="title App">
              <h1> <Link className='home' to="/">NotInsta</Link></h1>
              <ul className='signInUp'>
                <li>
                  <Link className='button' to="/UserLogin">Login</Link>
                </li>
                <li>
                  <Link className='button' to="/NewUser">Sign Up</Link>
                </li>
              </ul>
          </header>

          <nav>
            <ul className='navbar'>
                <li>
                    <Link className="shared" to="/Shared">Shared Gallery</Link>
                </li>
                <li>
                    <Link className="mostLiked" to="/MostLiked">Most Liked</Link>
                </li>
            </ul>
          </nav>

      
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/UserLogin' element={<UserLogin />} />
          <Route path='/NewUser' element={<NewUser />} />
          <Route path='/MostLiked' element={<MostLiked />} />
          <Route path="/Shared" element={<Shared />} />
        </Routes>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;

// 1: Upload Component - grab user file
// 2: useStorage Hook - func that takes user file as param and stores it in the firebase storage while returning a image url and timestamp 



// set up firebase storage and  firebase firestore
  // firebase storage - to store images
  // firebase firestore(database) - to keep track of image urls and give us realtime data

// create component for user to choose pic with input="file" and display input using state
// link uploaded user pic to firebase storage -   
  // have firebase/firestore make url of pic being uploaded locally 