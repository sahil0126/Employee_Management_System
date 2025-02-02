// import HelloWorld from "./HelloWorld"
import './App.css'
import ListEmployeeComponent from "./components/ListEmployeeComponent"
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'  



function App() {


  return (
    <>
    {/* <HelloWorld/> */}

    <BrowserRouter>
   

    <HeaderComponent/>
    <Routes>

      {/* //https://localhost:3000 */}
      <Route  path='/' element ={ <ListEmployeeComponent/> }></Route>
       {/* //https://localhost:3000/employees */}
       <Route  path='/employees' element ={ <ListEmployeeComponent/> }></Route>
      {/* //https://localhost:3000/add-employee */}
      <Route  path='/add-employee' element ={ <EmployeeComponent/> }></Route>
      
      {/* //https://localhost:3000/edit-employee/1 */}
      <Route  path='/edit-employee/:id' element ={ <EmployeeComponent/> }></Route>

    </Routes>
    <FooterComponent/>


    </BrowserRouter>
    </>
  )
}

export default App
