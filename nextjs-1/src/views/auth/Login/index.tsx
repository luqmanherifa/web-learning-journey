import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import styles from './Login.module.scss'

const LoginViews = () => {
  const {push} = useRouter();
  const handleLogin = () => {
    push("/product");
  }

  return (
    <div className={styles.login}>
      <h1 className='text-3xl font-bold text-blue-700'>Login Page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p>Belum punya akun? Registrasi <Link href={"/auth/register"}>di sini</Link></p>
    </div>
  )
}

export default LoginViews