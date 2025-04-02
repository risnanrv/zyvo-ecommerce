import React from 'react'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import NavbarSection from '../components/Navbar/Navbar'
import FooterSection from '../components/Footer/Footer'

function Product() {
  return (
    <div>
        <NavbarSection/>
      <ProductDetails/>
      <FooterSection/>
    </div>
  )
}

export default Product
