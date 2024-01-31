import React from 'react'

export default function Custom404() {
    return (
        <main className="bg-slate-50">
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <img src="/not_found.svg" alt="404" />
                <h1 className="text-slate-700 text-xl font-bold mt-4">404 | Halaman Tidak Ditemukan</h1>
            </div>
        </main>
    )
}
