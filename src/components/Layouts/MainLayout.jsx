import React from 'react'
import Header from '../Home/Header'
import SiteFooter from '../GlobalComponents/SiteFooter'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <SiteFooter />
        </>
    )
}

export default MainLayout