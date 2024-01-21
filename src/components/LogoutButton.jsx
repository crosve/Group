import {React, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from '../context/UserAuthContext';



function LogoutButton() {
  const { value: { handleLogOut } } = useContext(UserAuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('logging out');
    handleLogOut();
    navigate('/login');
  }
  return (
    <button className='button'>
      <a onClick={handleLogout}>Logout</a>
    </button>
    
  )
}

export default LogoutButton