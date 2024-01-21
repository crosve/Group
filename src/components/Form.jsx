import { React, useState, useContext} from 'react';
import { UserAuthContext } from '../context/UserAuthContext';
import { useNavigate } from "react-router-dom";
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline';



function Form() {

  const { value: { signUp, error, loggedIn, errorMessage } } = useContext(UserAuthContext);
  const navigate = useNavigate();



  const [user, setUser] = useState({
    name: "",
    email: "", 
    password: "",
    confirmPassword: "",
    age: "", 
    gender: "", 
    location: "", 
    intrests: "", 
    issuesArea:""
  })

  const userHandler = (e) =>{
    const {name, value} = e.target;
    setUser((prev) => {
      return {
        ...prev, 
        [name]: value
      }
    })
  }

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password, confirmPassword, age, gender, location, intrests, issuesArea} = user;
    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }
    else if(password.length < 6 ){
      alert("Password must be at least 6 characters long");
      return;
    }
    else{
      signUp(name, email, password, age, gender, location, intrests, issuesArea); 
      if(loggedIn){
        navigate('/dashboard'); 
      }
      else{
        setTimeout(() => {
          alert(errorMessage);
        }, 1000);
      }

    }

  
  };

  return (
    <form className='w-80' onSubmit={handleSubmit}>
      <label htmlFor='fname'>Username:</label><br />
      <input className='inputStyles' type='text' id='fname' name='name' value={user.name}  required onChange={userHandler} /><br />

      <label htmlFor='email'>Email:</label><br />
      <input className='inputStyles' type='text' id='email' name='email' value={user.email} required onChange={userHandler} /><br />

      {/* Note: Firebase auth will give an error if password < 6 */}
      <label htmlFor='password'>Password:</label><br />
      <input className='inputStyles' type='password' id='password' name='password' value={user.password} required onChange={userHandler} /><br />

      <label htmlFor='confirmPassword'>Confirm Password:</label><br />
      <input className='inputStyles' type='password' id='confirmPassword' name='confirmPassword' value={user.confirmPassword} required onChange={userHandler} /><br />

      <label htmlFor='age'>Age:</label><br />
      <input className='inputStyles' type='text' id='age' name='age' value={user.age} required onChange={userHandler} /><br />

      <label htmlFor='gender'>Gender</label><br/>
      <input className='inputStyles' type='text' id='gender' name='gender' value={user.gender} required onChange={userHandler} /><br/>

      <label htmlFor='location'>Location</label><br/>
      <input className='inputStyles' type='text' id='location' name='location' value={user.location} required onChange={userHandler} /><br/>

      <label htmlFor='intrests'>Intrests</label><br/>
      <input className='inputStyles' type='text' id='intrests' name='intrests' value={user.intrests} required onChange={userHandler} /><br/>

      <label htmlFor='issuesArea'>Issues Area</label><br/>
      <input className='inputStyles' type='text' id='issuesArea' name='issuesArea' value={user.issuesArea} required onChange={userHandler} /><br/>

      <button className='button'>
        Sign Up
      </button>

    </form>
  );
}

export default Form;
