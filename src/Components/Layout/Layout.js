import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Routes from "../Routes/Routers";

const Layout = () => {
  return (
    <div>
      <Navbar />
        <Routes />
      <Footer />
    </div>
  )
}

export default Layout
