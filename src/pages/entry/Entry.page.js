import React,{useState} from 'react'
import { Login } from '../../components/login/Login.comp'
import { ResetPassword } from '../../components/password-reset/Passwordreset.comp'

import "./entry.style.css"

export const Entry = () => {
    const [email,setEmail]=useState()
    const[password,setPassword]=useState()
    const [formLoad,setFormLoad]=useState("login")

    const handleChange =e=>{
        const{name,value}=e.target;
        

        switch(name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;

            default:
                break;
        }
    }

    const handleSubmit=e=>{
        e.preventDefault();
        if(!email || !password){
           return  alert("pls provide all info")
        }
        console.log(email,password)
    }

    const formSwitcher= type=>{
        setFormLoad(type);
    }

    const handleOnResetSubmit=(e)=>{
        e.preventDefault();

        if(!email){
            return alert("pls provide")
        }

        console.log(email);

    }
    return (
        <div  className="bg-info entry__page ">
            <div className="entry__container">
                {formLoad === 'login' && (
                      <Login handleOnChange={handleChange} email={email}
                      password={password}
                      handleSubmit={handleSubmit}
                      formSwitcher={formSwitcher}/> 
                    
                )}
               {formLoad === 'reset' && (
                      <ResetPassword
                      handleOnChange={handleChange} email={email} 
                      handleOnResetSubmit={handleOnResetSubmit}
                      formSwitcher={formSwitcher}
                     />
               )}
            </div>
              
         
            
  
        </div>
    )
}
