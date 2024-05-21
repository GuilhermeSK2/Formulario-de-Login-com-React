import React, {useState} from 'react';
import './App.css'
import user_icon from '../src/Assets/person.png'
import email_icon from '../src/Assets/email.png'
import password_icon from '../src/Assets/password.png'

const LoginSignup = () => {

  const [action,setAction] = useState("Entrar");

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==='Entrar'?<div></div>:<div className='input'>
          <img src={user_icon} alt=''/>
          <input type='text' placeholder='Nome'/>
        </div>}
        <div className='input'>
          <img src={email_icon} alt=''/>
          <input type='email' placeholder='E-mail'/>
        </div>
        <div className='input'>
          <img src={password_icon} alt=''/>
          <input type='password' placeholder='Senha'/>
        </div>
      </div>
      {action==="Cadastrar-se"?<div></div>:<div className='forgot-password'>Esqueceu a senha? <span>Clique aqui!</span></div>}
      <div className='submit-container'>
        <div className={action==="Entrar"?"submit gray":"submit"} onClick={()=>{setAction("Cadastrar-se")}}>Cadastrar-se</div>
        <div className={action==="Cadastrar-se"?"submit gray":"submit"} onClick={()=>{setAction("Entrar")}}>Entrar</div>
      </div>
    </div>
  )
}

export default LoginSignup;