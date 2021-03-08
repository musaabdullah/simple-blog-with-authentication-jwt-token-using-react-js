import React, {useState} from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const [errorEmail, setErrorEmail] = useState();
    const [errorPassword, setErrorPassword] = useState();

    const [registered, setRegistered] = useState(false);
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
      e.preventDefault();
      handleValid();
      try {
        const res = await axios.post("login", {email, password});
        if(res.data.success){
             console.log("sccuess true");
        }else {
          setMessage(res.data.error);
          console.log(res.data.error)
          setRegistered(true)
        }
        // console.log(res.data.success);
      } catch (error) {
        console.log(error.message);
      }
    }



    const closeBtn = () => {
      setRegistered(false);
    }

    const handleValid = () => {
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
        {registered && <div className="container__success">
          <div className="error">{message}</div><i onClick={() => closeBtn()} className="fa fa-close btn__close"></i>
        </div> }
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
      
             <button className="form__button" onClick={handleLogin}>sigin</button>
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
