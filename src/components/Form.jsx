import {React, useState }from 'react'


function form() {
    const [data, setData] =useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        setData(data);
        console.log(data);
    }

  return (
    <form className=' w-80' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="fname">First name:</label><br/>
        <input className='inputStyles' type="text" id="fname" name="fname" required/><br/>

        <label htmlFor="lname">Last name:</label><br/>
        <input className='inputStyles' type="text" id="lname" name="lname" required/><br/>

        <label htmlFor="email">Email:</label><br/>
        <input className='inputStyles' type="text" id="email" name="email" required/><br/>

        <label htmlFor="password">Password:</label><br/>
        <input className='inputStyles' type="text" id="password" name="password" required/><br/>

        <label htmlFor="repeatPassword">Confirm Password:</label><br/>
        <input className='inputStyles' type="text" id="repeatPassword" name="repeatPassword" required/><br/>

        <label htmlFor="birthday">Birthday:</label><br/>
        <input className='inputStyles' type="date" id="birthday" name="birthday" required/><br/>

        <button className='button'>
            submit
        </button>
    </form>
  )
}

export default form