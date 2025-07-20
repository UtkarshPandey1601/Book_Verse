import React from 'react'
import Home from './home/Home.jsx'
import Books from './components/Books.jsx'
import { Route, Routes} from 'react-router-dom'
import Signup from './components/Signup.jsx'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authprovider.jsx'
import About from './components/About.jsx'
function App() {
    const [auth,setAuth] = useAuth();
    console.log(auth);
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={auth?<Books />:<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
