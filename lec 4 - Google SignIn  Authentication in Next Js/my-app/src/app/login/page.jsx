
"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Login = () => {

    const session = useSession()
    // console.log(session);

    if( session.status === 'loading'){
        return <p>
            Login
        </p>
    }

    if( session.status === "authenticated"){
        return (
            <div>
              <button onClick={() => signOut("google")}>
                Log Out
              </button>
            </div>
          )
    }

  return (
    <div>
      <button onClick={() => signIn("google")}>
        LogIn with Google
      </button>
    </div>
  )
}

export default Login
