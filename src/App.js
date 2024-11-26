import Boka from './boka';
import './style.css'
import Room from './Room'
import { BrowserRouter, Route, Router } from 'react-router-dom';

function App() {
  return (
    <>
 
   
     <Room/> 
 
 <Boka/>
    
    </>
 
 
  );
}

export default App;
 /*<Router>

   <Route>
 <Route path="/boka" element={<Boka/>}></Route>

    </Route>
   </Router>*/