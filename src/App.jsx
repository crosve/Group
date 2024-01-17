import { lazy, Suspense } from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Volunteer from './Pages/Volunteer'
import Chat from './Pages/Chat'
import NoMatch from './Pages/NoMatch'
import Navbar from './components/Navbar'
import Login from './Pages/Login'


function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/volunteer" element={<Volunteer/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NoMatch />} />
      </Routes>
  
    </>
  )
}

export default App
