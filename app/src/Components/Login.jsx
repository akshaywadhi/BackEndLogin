import React, {useState} from 'react'
import Navbar from './Navbar'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUser } from './Redux/UserSlice'

export default function Login() {

  const [show, setShow] = useState(false)
  const [users, setUsers] = useState({
    name : '',
    password: ''
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  function showButton(){
    setShow(!show)
  }

  function handleChange(e) {

    setUsers((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  function focus(){
    document.querySelector('.error').textContent = ''
  }

  async function handleSubmit(e){
    e.preventDefault()

    console.log(users)

    if(users.name === '' || users.password === ''){
      document.querySelector('.error').textContent = 

      'Please Fill Login Credentials'

   
    }
    else{
      try{
        const data = await axios.post('http://localhost:3000/users/checkData', {...users})
        console.log(data.data)
     
        if(data.data.data === 'valid'){
      
        navigate('/user')
        dispatch(getUser({
          username : users.name
        }))
        
        }
        else{
          document.querySelector('.error').textContent = 'User Not Found'
          
        }
      
      }
      catch(err){
  console.log(err)
      }
  
  
  

    }

    
  }
  return (
    <div>
      <div>
        <Navbar login='Login Form'/>
      </div>
      <div className='login-container'>
        <div className='login-content'>
<form className='login-form' onSubmit={handleSubmit}>

  <input onFocus={focus} name='name' value={users.name} type='text' placeholder='Enter Your Username' onChange={handleChange}/>

  <div className='password-container'>

  <input onFocus={focus} name='password' value={users.password} type={show ? 'password' : 'text'} placeholder='Enter Your Password' onChange={handleChange}/>

  <div className='password-content'>
    {
      show ?   <i onClick={showButton} className="fa-solid fa-eye"></i> : <i onClick={showButton} className="fa-solid fa-eye-slash"></i>
    }



  </div>
  </div>
  <h4 className='error' style={{color: 'red'}}></h4>
 
  <button>Login</button>

</form>
<div className='text'>

<h1>I Created Small User Login Project Using React & NodeJs</h1>
<h3 style={{color: 'white', marginTop : '10px'}}>Hope You Will Like It</h3>
<h3 style={{color: 'white', marginTop : '10px'}}>(I Can Make It More Animated & Dynamic, But I Just Did Not😅)</h3>
</div>
        </div>
      </div>
    </div>
  )
}
