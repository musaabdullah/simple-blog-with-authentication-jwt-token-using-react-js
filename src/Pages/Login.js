import React, {useState} from 'react'
import './style.css';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const [errorEmail, setErrorEmail] = useState();
    const [errorPassword, setErrorPassword] = useState();
  
    const handleValid = (e) => {
      e.preventDefault();
    
      if(!email){
        setErrorEmail("You can't leave email empty")
      }else {
        setErrorEmail("");
      }
      if(!password){
        setErrorPassword("You can't leave password empty");
      }else if(password.length < 6) {
        setErrorPassword("Password must be more 6 character long")
      }else {
        setErrorPassword("");
      }
    }

    return (
        <div className="body">
        <div className="container">
        <div className="container__title">Login</div>
      
      
        <div className="container__body">
          <form className="form"> 
           
             <div className="form__group">
                <i className="fa fa-envelope"></i>
                <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
                />
             </div>
               {errorEmail && <p className="error">{errorEmail}</p>}
             <div className="form__group">
                <i className="fa fa-unlock-alt"></i>
                <input 
                type="password" 
                placeholder="Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                /><br/>
             </div>
             {errorPassword && <p className="error">{errorPassword}</p>}
      
             <button className="form__button" onClick={handleValid}>sigin</button>
          </form>
        </div>
          <div className="container__footer">
          <div className="footer__title">
                If you don't have an account?<Link to="/register">sigup</Link>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Login
