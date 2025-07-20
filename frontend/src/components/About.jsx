import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
  return (
    <>
    <Navbar/>
    <div className="bg-white text-gray-800 px-6 py-12 mt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">About BookVerse</h1>

        <p className="text-lg mb-4 leading-relaxed">
          <span className="font-semibold text-indigo-500">BookVerse</span> is a clean, simple, and user-friendly platform built for book enthusiasts. Whether you're a casual reader or an avid bibliophile, BookVerse is designed to make browsing and discovering books more enjoyable.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          Our platform displays essential book details such as titles, authors, and descriptions, helping you explore new reads with ease. We prioritize clarity and minimalism in design, so you can focus on the joy of discovering books without any distractions.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          BookVerse is lightweight, responsive, and easy to navigate. With a visually appealing layout and structured categories, it offers a smooth experience whether you're on desktop or mobile.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          This project was built as a passion effort — a place where clean UI meets a love for reading. It’s not just a website, but a step toward building a space that book lovers can relate to and return to.
        </p>

        <p className="text-lg leading-relaxed">
          Thank you for visiting BookVerse. We hope you enjoy exploring it as much as we enjoyed building it.
        </p>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About
