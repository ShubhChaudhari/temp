
import {BrowserRouter , Routes, Route} from "react-router-dom"
import './App.css';
import ArithmeticOperation from "./Component/Assignment-1";
import DisplayRecord from "./Component/Assignment-2";
import DragAndDropDemo from "./Component/DragAndDropDemo"
import CountryList from "./Component/CountryList";


function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<ArithmeticOperation/>}/>
          <Route path='/assignment2' element={<DisplayRecord/>}/>
          <Route path='/dragdrop' element={<DragAndDropDemo/>}/>
          <Route path='/countrylist' element={<CountryList/>}/>
         
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
