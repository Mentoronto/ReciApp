import styles from "../styles/Featured.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { parseCookies } from "nookies"
import { useSession} from 'next-auth/react'
import { useRouter } from 'next/router';

const Featured = () => {
  const [apple, setApple] = useState('')
  const [Btn, setBtn] = useState('')
  const [Grw, setGrw] = useState('')
  const [circle, setCircle] = useState('')
  const cookies = parseCookies()
  const { data: session} = useSession()
  const router = useRouter();

  const changeStyle =()=>{
    if(apple === ''){
      setApple(styles.appleFall)
      setBtn(styles.invisBtn)
      setGrw(styles.Grows)
      setCircle(styles.circle)
    }else {
      setApple('')
      setBtn('')
      setGrw('')
      setCircle('')
    }
  }
  
  return (
    <div>
     {cookies?.token || session?.user ?(
       router.push('/recipes')
     ):(
       <div className={styles.container}>
       <div className={styles.left}>
       <h1 className={styles.title}>Gr<span className={`${styles.o} ${circle}`}>o</span>
       <FontAwesomeIcon icon={faAppleAlt} onClick={changeStyle} className={`${styles.apple} ${apple}`} objectFit="contain" color="#e32f2f" />
       wceries
       <Link href={"/login"} passHref>
       <button className={`${styles.start} ${Btn}`}>Get Started</button>
       </Link>
       </h1>
       <p className={styles.desc}>Keep track of all your groceries and favorite recipes as they continue to 
       </p>
       <span className={`${styles.grow} ${Grw}`}>grow</span>
       </div>
       <div className={styles.right}>
       <div className={styles.box}>
       <Image src='/img/food.png' layout="fill"  />
       <div className={styles.oval}>
       <Image src='/img/milk.png' layout="fill"  objectFit="contain" />
       </div>
       <div className={styles.oval}>
       <Image src='/img/eggs.png' layout="fill"  objectFit="contain"/>
       </div>
       <div className={styles.oval}>
       <Image src='/img/PB_J.png' layout="fill"  objectFit="contain" />
       </div>
       <div className={styles.oval}>
       <Image src='/img/cereal.png' layout="fill"  objectFit="contain"/>
       </div>
       </div>
       </div>
       </div>
       )
     }
    </div>
   )
}
      
export default Featured;