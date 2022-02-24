import React from 'react'
import Layout from '../component/Layout';
import { parseCookies } from "nookies"
import { useSession } from "next-auth/react";

const Recipes = () => {
  const cookies = parseCookies()
  const { data: session }=useSession()
  const user = cookies?.user ? JSON.parse(cookies.user):session?.user ? session?.user : "";


  return (

    <div>
      {cookies?.token || session?.user ?(
        <Layout user={user}>
      recipes
      </Layout> 
        ):(
          <div>This page is unavailable. Please Log in</div>
        )
      }
    </div>
  )
}

export default Recipes