
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
import Expense from './Expense';
import Whether from './Whether';
import Student from './Student';
import ExpenseTracker from './Component/ExpenseTracker';


function App() {
  return (
    
    <div>
       <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path='/' element={<AddEmp/>}/>
        <Route path='/word-letter' element={<StringWordCount/>}/>
        <Route path='/todo' element={<ToDo/>}/>
        <Route path='/percentage' element={<Student/>}/>
        <Route path='/expense-tracker' element={<ExpenseTracker/>}/>
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
      {/* <Expense/> */}
      {/* <Whether/> */}
      {/* <Student/> */}
    </div>
  );
}

export default App;
