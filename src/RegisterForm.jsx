import React, { useState } from 'react'

const RegisterForm = () => {
    const[user,setUser]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        phoneNumber:'',
    })

    const handleInputChange = (e) => {
        const {name,value} = e.target
        setUser((prev) => ({...prev, [name]:value}) )
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault()
        console.log(user)
    }

  return ( 
    <div className="registerForm">
        <form action="" onSubmit={handleFormSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" required placeholder='Enter First Name' value={user.firstName} onChange={handleInputChange} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" required placeholder='Enter Last Name' value={user.lastName} onChange={handleInputChange} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required placeholder='Enter Email' value={user.email} onChange={handleInputChange} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required placeholder='Enter Password' value={user.password} onChange={handleInputChange} />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" name="phoneNumber" required placeholder='Enter Phone Number' value={user.phoneNumber} onChange={handleInputChange} />
            <button className='signUP' type='submit' >
               <span className='signOne' > Sign Up dsfsdfsdfsdfsdfdfdss </span>
               <span className='signTwo' > Click Sign Up </span>
                </button>
        </form>
    </div>
  )
}

export default RegisterForm