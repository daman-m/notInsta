import "./App.css"
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from "./Routes/routes";

function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <div className='wrapper'></div>
      </div>
        <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;