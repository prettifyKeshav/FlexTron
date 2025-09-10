import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const MainTemplate = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MainTemplate 