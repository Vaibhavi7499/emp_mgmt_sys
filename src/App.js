
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout';
import AddEmp from './Component/AddEmp';


function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path='/' element={<AddEmp/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
