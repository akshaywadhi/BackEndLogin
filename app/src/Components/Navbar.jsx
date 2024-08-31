import React, {useEffect, useState} from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({user}) {
  
  let location = useLocation()
  const [random, setRandom ] = useState()

  useEffect(() => {

   let randomProfile = Math.trunc(Math.random() * 1000)
    console.log(randomProfile)
    setRandom(randomProfile)

  },[])


  function logout(){
    window.location.replace('/')
  }
  return (
    <div>
      <div className='navbar' >
        


{
  location.pathname === '/' &&
  <>
  <h1>Login Form</h1>
  <span className='signup-link'>SignUp<Link to='/signup' className='signup-link here'>Here</Link> </span>
  </>
}



{
          location.pathname === '/signup' &&
           <><h1>SignUp Form</h1>
           <span className='signup-link'>Login<Link to='/' className='signup-link here'>Page</Link> </span>
           </>
}


{
location.pathname === '/user' &&
<>
<div style={{background: 'transparent'}} className='userProDiv'>
<img className='userPro' src={`https://picsum.photos/id/${random}/200/300`} />
<div>
  <p> {user}</p>
</div>
</div>

<h5 onClick={logout} className='logout'>Logout</h5>

</>
}




        


     
        
      </div>
    </div>
  )
}
