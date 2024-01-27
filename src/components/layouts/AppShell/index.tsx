import React from 'react'
import Navbar from '../Navbar'

export default function AppShell(props: any) {
    const { children } = props
    return (
        <main>
            <Navbar/>
            {children}
        </main>
    )
}
