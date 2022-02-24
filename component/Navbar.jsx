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
       {user.email}
     <button className={styles.logout} onClick={logoutHandler}> Logout</button>
      </div>
   
  )
}