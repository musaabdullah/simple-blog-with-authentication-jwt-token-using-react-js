import React, {useState} from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Register() {

    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const [errorFullName, setErrorFullName] = useState();
    const [errorEmail, setErrorEmail] = useState();
    const [errorPassword, setErrorPassword] = useState();

    const [registered, setRegistered] = useState(false);
    
    const [isPending, setIsPending] = useState(false);

    const closeBtn = () => {
      setRegistered(false);
    }

    const handleRegister = async (e) => {
      e.preventDefault();
      handleValid();
        try {
          setIsPending(true);
          const res = await axios.post("register", {fullName, email, password});
          console.log(res.data);

          if(res.data.success) {
           setRegistered(true);
          } else {
            console.log(res.data.error);
          }
          setIsPending(false);
        } catch(error) {
          console.log(error.message);
        }

        setFullName("");
        setEmail("");
        setPassword("");

    }
    


    const handleValid = () => {
      if(!fullName){
        setErrorFullName("You can't leave full name empty")
      }else{
        setErrorFullName("");
      }
      if(!email){
        setErrorEmail("You can't leave email empty")
      }else {
        setErrorEmail("");
      }
      if(!password){
        setErrorPassword("You can't leave password empty");
      }else if(password.length < 6) {
        setErrorPassword("Password must be more 6 character")
      }else {
        setErrorPassword("");
      }

    }

    return (
        <div className="body">
        <div className="container">
        <div className="container__title">create account</div>
        {registered && <div className="container__success">
          <div>User registered successfully</div><i onClick={() => closeBtn()} className="fa fa-close btn__close"></i>
        </div> }
        <div className="container__body">
          <form className="form"> 
             <div className="form__group">
                <i className="fa fa-user"></i>
                <input 
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)} />
             </div>
               {errorFullName && <p className="error">{errorFullName}</p>}
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
      
            {!isPending && <button className="form__button" onClick={handleRegister}>sigup</button> }
             {isPending && <button className="form__button"  >Pending data...</button>}
          </form>
        </div>
          <div className="container__footer">
          <div className="footer__title">
                 If you already have an account ?<Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Register
