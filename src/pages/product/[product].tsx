import React from 'react'
import { useRouter } from 'next/router'

export default function DetailProductPage() {
    const { query } = useRouter()
    console.log(query)
    return (
        <div>
            <h1 className="text-xl">Detail Product Page</h1>
            <p>Product : {query.product} </p>
        </div>
    )
}
