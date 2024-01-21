import {React, useContext} from 'react'
import { UserAuthContext } from '../context/UserAuthContext';
import LogoutButton from '../components/LogoutButton';



function Dashboard() {
  const { value: { handleLogOut } } = useContext(UserAuthContext);


  return (
    <>
      <div>Dashbaord</div>
      <LogoutButton/>
    </>
  )
}

export default Dashboard