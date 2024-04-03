import React from 'react'
import Header from '../Home/Header'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default MainLayout