import {React, useState} from 'react'

function ChatForm() {
    const [information, setInformation] = useState({
        age: "",
        gender: "", 
        location: ""
    });

    const userHandler = (e) =>{
        const {name,value} = e.target;
        setInformation((prev) => {
            return {
                ...prev, 
                [name]: value
            }
        })

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(information);

    }



  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='age'>Age</label>
        <input type='text' id='age' name='age' value={information.age} onChange={userHandler} required/>

        <label htmlFor='gender'>Gender</label>
        <input type='text' id='age' name='gender' value={information.gender} onChange={userHandler} required/> 

        <label htmlFor='location'>Location</label>
        <input type='text' id='location' name='location' value={information.location} onChange={userHandler} required/>

        <button>Submit</button>

    </form>
   
  )
}

export default ChatForm