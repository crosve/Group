import {React, useState, useContext} from 'react'
import {auth} from '../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../context/UserAuthContext';



function Login() {
  const { value: {loggedIn } } = useContext(UserAuthContext);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


    const handleLogIn = async (e) =>{
      e.preventDefault();
      try{
        const user = await signInWithEmailAndPassword(auth, email, password);

        console.log(user);
        navigate('/dashboard');

      }catch(error){
        console.log(error.message, error);
      }


    }




  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <h1>Log In</h1>
        <form className=' w-80' >
            <label htmlFor="email">Email:</label><br/>
            <input className='inputStyles' type="text" id="email" name="email" required onChange={(e) => setEmail(e.target.value)}/><br/>

            {/*Note: Firebase auth will give an error if password < 6 */}
            <label htmlFor="password">Password:</label><br/>
            <input className='inputStyles' type="password" id="password" name="password" required onChange = {(e) => setPassword(e.target.value)}/><br/>

            <button className='button' onClick={handleLogIn}>Log in</button>

        </form>
</div>
  )
}

export default Login