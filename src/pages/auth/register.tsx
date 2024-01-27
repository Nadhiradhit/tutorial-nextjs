import Link from 'next/link'
import React from 'react'

export default function RegisterPage() {
    return (
        <div>
            <h1>Register Page</h1>
            <p>
                Sudah punya akun? Login <Link href={"/auth/login"}>Klik Disini</Link>
            </p>
        </div>
    )
}
