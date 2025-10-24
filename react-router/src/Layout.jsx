import React from 'react'
import Header from './components/Header/Header'
import Footor from './components/Footor/Footor'
import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footor />
        </>
    )
}

export default Layout
