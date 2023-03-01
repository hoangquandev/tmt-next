import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Topbar from './Topbar'

const Layout = ({ children }) => {
    return (
        <div>
            <Topbar />
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout