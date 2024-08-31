import Login from "./Components/Login"
import './App.css'
import {Route, Routes} from 'react-router-dom'
import User from "./Components/User"
import Signup from "./Components/Signup"


function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/user' element={<User/>} />
      <Route path='/signup' element={<Signup/>} />
     </Routes>
    </>
  )
}

export default App
