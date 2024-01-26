import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Providers from '../components/Providers'

function RootLayout() {
    return (
        <Providers>
            <>
                <Navbar />
                <div className="container">
                    <Outlet />
                </div>
            </>
        </Providers>
    )
}

export default RootLayout