
import './App.css'
import Dashboard from './comp/Dashboard'
import SignUp from './comp/SignUp'
import Login from './comp/Login'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<SignUp/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
     {/* <Dashboard/>
     <SignUp/>
     <Login/> */}
    </div>
  )
}

export default App
