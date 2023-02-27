import 'App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from 'Routes/routes';
// import { Link, Routes, Route } from 'react-router-dom';
// import MostLiked from './Routes/MostLiked';
// import Shared from './Routes/Shared';
// import UserLogin from './Routes/UserLogin';
// import NewUser from './Routes/NewUser';


function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <div className='wrapper'>
          
        </div>
    
    

      
      
      
      </div>
        <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;

 {/* // 1: Upload Component - grab user file
// 2: useStorage Hook - func that takes user file as param and stores it in the firebase storage while returning a image url and timestamp 



// set up firebase storage and  firebase firestore
  // firebase storage - to store images
  // firebase firestore(database) - to keep track of image urls and give us realtime data

// create component for user to choose pic with input="file" and display input using state
// link uploaded user pic to firebase storage -   
  // have firebase/firestore make url of pic being uploaded locally   */}