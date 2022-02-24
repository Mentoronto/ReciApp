import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react'
import axios from 'axios';
import cookie from 'js-cookie';
import styles from '../styles/Login.module.css'
import Register from '../component/register';
import { useRouter } from 'next/router';
import { useSession, signIn, getSession } from 'next-auth/react'
import Image from 'next/image';
import { parseCookies } from "nookies"
import { toast } from "react-toastify";
import { useSelector,useDispatch } from "react-redux";
import {googleOn} from "../Redux/googleSlice";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reg, setReg]=useState(false);
  const router = useRouter();
  const { data: session} = useSession()
  const cookies = parseCookies()
  const { googleState } = useSelector((state)=>state.logInOut);
  const dispatch = useDispatch();
 

  useEffect(()=>{
    if(session && router.route === "/login" && googleState === false ){
      toast.success("Login Succesful")
      router.push('/recipes')
      dispatch(googleOn());
    }
   },[session])

const SubmitHandlerLogin = async(e)=>{
  e.preventDefault()
  
    try {
      const config = {
        headers:{
          "Content-Type": "application/json",
        },
      }
      
      const {data} = await axios.post('/api/login', {email,password},config)
      const res = await axios.post('/api/login', {email,password},config)
      res.status === (201) && router.push('/recipes/');
      
      toast.success(data.message)
      cookie.set('token',data?.token)
      cookie.set('user',JSON.stringify(data?.user))
       
    } catch (error) {
      toast.error(error.response.data.error); 
    }
  }

  const googleSignIn = ()=>{
    signIn('google')
  
  }


  return (
     <div className={styles.container}>

   {cookies?.token || session?.user ?(
     <>
        <h1 className={styles.title}>Gr
          <FontAwesomeIcon icon={faAppleAlt} className={styles.apple} width={50} height={50} objectFit="contain" color="#e32f2f" />
          wceries
          </h1>
          <p className={styles.alrLogged}>You are already logged in. Please log out before coming here</p>
     </>
        ):(
          <>
          <h1 className={styles.title}>Gr
          <FontAwesomeIcon icon={faAppleAlt} className={styles.apple} width={50} height={50} objectFit="contain" color="#e32f2f" />
          wceries
          </h1>
        {reg ?(<Register setGoogleLogin={setGoogleLogin} setReg={setReg}/>):(
          <div className={styles.loginContainer}>
          <form onSubmit={SubmitHandlerLogin} className={styles.form}>
            <h1 className={styles.login}>Login</h1>
            <input value={email} placeholder="Input email" onChange={(e)=>setEmail(e.target.value)} className={styles.input}/>
            <input value={password} placeholder="Input password" onChange={(e)=>setPassword(e.target.value)} className={styles.input} /> 
            <button type="submit" className={styles.loginBtn}>Login</button>
          </form>
            <button onClick={googleSignIn} className={styles.google}>
              <div className={styles.googleContainer}>
                <Image src='/img/google.png' width={32} height={32} className={styles.googleImage}/>
                <p className={styles.googleText}>
                  Sign In with Google
                </p> 
              </div> 
            </button>
            <p onClick={()=>setReg(true)} className={styles.registerSwitch}>Are you a New User? Click Here</p>
        </div>)}
            </>
        )
      }
  </div>
  )
}


export const getServerSideProps = async (ctx) =>{
  const session = await getSession(ctx)
  return{
    props:{
      session,
    },
  };
};

export default Login
