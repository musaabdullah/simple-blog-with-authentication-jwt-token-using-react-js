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
        setErrorEmail("لا يمكن ترك بريد المستخدم فارغا")
      }else {
        setErrorEmail("");
      }
      if(!password){
        setErrorPassword("لا يمكن ترك كلمة المرور فارغا");
      }else if(password.length < 6) {
        setErrorPassword("كلمة المرور يجب ان تكون اكثر من سته احروف")
      }else {
        setErrorPassword("");
      }
    }

    return (
        <div className="body">
        <div className="container">
        <div className="container__title">تسجيل الدخول</div>
      
      
        <div dir="rtl" className="container__body">
          <form className="form"> 
           
             <div className="form__group">
                <i className="fa fa-envelope"></i>
                <input 
                type="email" 
                placeholder="أيميل المستخدم" 
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
                />
             </div>
               {errorEmail && <p className="error">{errorEmail}</p>}
             <div className="form__group">
                <i className="fa fa-unlock-alt"></i>
                <input 
                type="password" 
                placeholder="كلمة المرور"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                /><br/>
             </div>
             {errorPassword && <p className="error">{errorPassword}</p>}
      
             <button className="form__button" onClick={handleValid}>سجل حساب</button>
          </form>
        </div>
          <div className="container__footer">
          <div className="footer__title">
             اذا ليس كان عندك حساب سابقا؟<Link to="/register">تسجيل حساب</Link>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Login
