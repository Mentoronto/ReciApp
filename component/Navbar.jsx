import styles from "../styles/Navbar.module.css"
import { useSession,signOut } from "next-auth/react";
import cookie from "js-cookie";
import { useRouter } from 'next/router';
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {googleOff} from "../Redux/googleSlice";

export default function Navbar ({user}){  
  const router = useRouter();
  const { data: session }=useSession()
  const { googleState } = useSelector((state)=>state.logInOut);
  const dispatch = useDispatch();


  useEffect(()=>{
    if(!session && googleState === true){
      toast.success("Sign out Succesful")
      router.push('/login')
      dispatch(googleOff());
    }
   },[session])

  const logoutHandler = async()=>{
    if(session){
      signOut()
    }
    toast.success("Sign out Succesful")
    cookie.remove('token')
    cookie.remove('user')
    router.push('/login')
  }

  return (

     <div className={styles.container}>
       <div className={styles.head}>
     
       </div>
       <div className={styles.head}>
       <h1 className={styles.title}>Gr<span className={styles.red}>o</span>wceries</h1>
       </div>
       <div className={styles.head}>
         <div className={styles.logArea}>
        <p className={styles.userTitle}>Signed in as {user.email}</p> 
        <button className={styles.logout} onClick={logoutHandler}> Logout</button>
         </div>
       </div>
      </div>
   
  )
}