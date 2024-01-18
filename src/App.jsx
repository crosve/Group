import { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Volunteer from './Pages/Volunteer'
import Chat from './Pages/Chat'
import NoMatch from './Pages/NoMatch'
import Navbar from './components/Navbar'
import Login from './Pages/Login'


function App() {
  const [backendData, setBackendData] = useState(null);
  useEffect(() => {
    //proxy not working for some reason so I just used the full url to our backend
    //Fixed: in case anyone else ever has this error: add  proxy:{ 'api': 'http://localhost:5001'} to vite.config.js
    fetch('/api')
      .then(response => {
        if (response.ok) {
          return response.json();

        }
        throw new Error('Request failed.');
      }
      )
      .then(data => {
        setBackendData(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }, []);

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
