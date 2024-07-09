
import { BrowserRouter, Route, Routes,NavLink } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout';
import AddEmp from './Component/AddEmp';
import Home from './Home';
import About from './About';
import Main from './Main';
import Parent from './Parent';
import Example from './Example';
import StringWordCount from './Component/StringWordCount';
import ToDo from './ToDo';
import ExpenseTracker from './Component/ExpenseTracker';
import Age from './Component/Age';


function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path='/' element={<AddEmp/>}/>
        <Route path='/word-letter' element={<StringWordCount/>}/>
        <Route path='/todo' element={<ToDo/>}/>
        <Route path='/expense-tracker' element={<ExpenseTracker/>}/>
        <Route path='//age-cal' element={<Age/>}/>
      </Routes>
     
      </BrowserRouter>  
      {/* <BrowserRouter>
      <Main/>
      <Routes>
<Route path='/home' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter> */}
      {/* <Parent/> */}
      {/* <Example/> */}
      {/* <ToDo/> */}
    </div>
  );
}

export default App;
