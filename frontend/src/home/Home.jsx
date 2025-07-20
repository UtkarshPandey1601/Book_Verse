import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import DeskBook from '../components/DeskBook.jsx'
import About from '../components/About.jsx'
function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <DeskBook />
            <Footer />
        </>
    )
}

export default Home