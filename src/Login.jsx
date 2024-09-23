import React, { useState } from 'react'

const Login = () => {

  const[loginUser,setLoginUser]=useState({
    userName:'',
    password:'',
  })

  const handleInputForm = (e) => {
    const {name,value} = e.target

    setLoginUser((prev) => ({...prev,[name]:value}) )
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log(loginUser)
  }

  return (
    <div className="registerForm">
        <form onSubmit={handleSubmitForm} >
            <label htmlFor="userName">UserName</label>
            <input type="text" name="userName" required placeholder='Enter User Name' value={loginUser.userName} onChange={handleInputForm}  />
            <label htmlFor="password">Last Name</label>
            <input type="password" name="password" required placeholder='Enter Password' value={loginUser.password} onChange={handleInputForm}   />
            <div className='button' >
            <button className='buttonOne' type='submit' > Login </button>
            <button className='buttonTwo' type='submit' > Click </button>
            </div>
        </form>
    </div>
  )
}

export default Login