import React from 'react'
import { useRouter } from 'next/router'

export default function ShopPage() {
    const { query } = useRouter()
    // console.log(query)
    return (
        <div>
            <h1 className="text-xl">Shop Page</h1>
            <p>Product : {`${query.slug && query.slug[0] + "-" + query.slug[1]}`} </p>
        </div>
    )
}
