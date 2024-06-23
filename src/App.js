
import { BrowserRouter, Route, Routes,NavLink } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout';
import AddEmp from './Component/AddEmp';
import Home from './Home';
import About from './About';
import Main from './Main';
import Parent from './Parent';
import Example from './Example';

function App() {
  return (
    <div>
     
      {/* <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path='/' element={<AddEmp/>}/>
       
      </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter>
      <Main/>
      <Routes>
<Route path='/home' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter> */}
      {/* <Parent/> */}
      <Example/>
    </div>
  );
}

export default App;
