
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout';
import AddEmp from './Component/AddEmp';
import ViewEmp from './Component/ViewEmp';

function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path='/add-emp' element={<AddEmp/>}/>
        <Route path='/' element={<ViewEmp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
