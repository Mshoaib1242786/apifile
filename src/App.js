import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';


function App() {
  return (
      <div className='main'>
         <h2 className='main-header'>React Crud Operations</h2>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Create/>} />
      <Route path='/Read' element={ <Read/>} />
      <Route path='/Update' element={ <Update/>} />
 
 
 
    </Routes> 
    </BrowserRouter>
  </div> 
  );
}

export default App;