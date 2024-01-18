import React from 'react'
import Form from '../components/form'

function Volunteer() {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center mt-4'>
            <h1 className='text-4xl	font-semibold text-red-700'>Become a volunteer today!</h1>
            <p className='font-medium'>First create your account here. Once your account has been created you will be directed to your dashboard</p>
        </div>

        <div className='mt-4'>
            <Form/>
        </div>
    </div>
    
  

    </>
  )
}

export default Volunteer