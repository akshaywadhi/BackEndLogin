import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'


export default function User() {

  const [getUser, setGetUser] = useState(null)
  const username = useSelector(state => state.user.users)


  useEffect(() => {

    username.map((user) => {
      console.log(user.username)
      setGetUser(user.username)
    })
  })

  


  return (
    <div>

      <div>
        <Navbar user={getUser}/>
      </div>
      
<h1 style={{color: 'white', textAlign:'center'}}>Hello, <span style={{color: "blueviolet"}}>{getUser}</span>  You Are Logged In Successfully Using Backend Authrization</h1>
<h3 style={{textAlign:'center', marginTop: '20px'}}>You Can Logout Using Navabar Logout Button</h3>
<h3 style={{textAlign:'center', marginTop: '20px'}}>(Is's A Basic Login Form, I Will Add More Features Later)</h3>
    </div>
  )
}
