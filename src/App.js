
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout';
import AddEmp from './Component/AddEmp';
import StringWordCount from './Component/StringWordCount';


function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path='/' element={<AddEmp/>}/>
        <Route path='/word-letter' element={<StringWordCount/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
