

import React, { useContext, useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Volunteer from './Pages/Volunteer';
import Chat from './Pages/Chat';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import NoMatch from './Pages/NoMatch';
import { UserAuthProvider } from './context/UserAuthContext';
import { UserAuthContext } from './context/UserAuthContext';

function App() {
  const location = useLocation();
  const { value: { loggedIn } } = useContext(UserAuthContext);



  return (
    <UserAuthProvider>
      <>
        {!location.pathname.startsWith('/dashboard') && <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Outlet />}>
            {/* Nested routes under /dashboard */}
            <Route index element={<Dashboard />} />
            {/* Add more dashboard routes as needed */}
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </>
    </UserAuthProvider>
  );
}

export default App;

  