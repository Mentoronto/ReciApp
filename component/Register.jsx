import { useState } from 'react'
import axios from 'axios';
import styles from '../styles/Register.module.css'
import { toast } from "react-toastify";

const Register = ({setReg}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');

  const SubmitHandlerRegister = async(e)=>{
    e.preventDefault()

    
    try{
      const data= await axios.post('/api/register', {email,firstName,lastName,password},config);
      data.status === (200) && setReg(false);
      const config = {
        headers:{
          "Content-Type": "application/json",
        },
      }
    }catch(error){
      toast.error(error.response.data.message);
      toast.error(error.response.data.error);
    }
  }


  return (
    <div className={styles.registercontainer}>
         <form onSubmit={SubmitHandlerRegister} className={styles.form}>
           <h1 className={styles.register}>Register</h1>
           <div className={styles.names}>
            <input value={firstName} placeholder="Input first name" onChange={(e)=>setFirstName(e.target.value)} className={styles.firstName}/>
            <input value={lastName} placeholder="Input last name" onChange={(e)=>setLastName(e.target.value)} className={styles.lastName}/>
           </div>
           <input value={email} placeholder="Input email" onChange={(e)=>setEmail(e.target.value)} className={styles.input}/>
           <input value={password} placeholder="Input password" onChange={(e)=>setPassword(e.target.value)} className={styles.input}/> 
           <button type="submit" className={styles.registerBtn}>Sign Up</button>
           <p onClick={()=>setReg(false)} className={styles.loginSwitch}>Already have an account? Click Here</p>
         </form>
     </div>
  )
}

export default Register
