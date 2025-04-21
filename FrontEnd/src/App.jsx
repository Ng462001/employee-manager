import Header from './component/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/Login'
import ListEmployee from './component/ListEmployee'
import EmployeeComponent from './component/EmployeeComponent'
import Signup from './component/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListEmployee />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/add-employee' element={<EmployeeComponent />}></Route>
          <Route path='/update-employee/:id' element={<EmployeeComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
