import React from 'react'
import Link from 'next/link'

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <p>Sudah punya akun? Login <Link href={"/auth/login"}>di sini</Link></p>
    </div>
  )
}

export default RegisterPage