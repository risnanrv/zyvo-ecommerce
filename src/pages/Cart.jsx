import React from 'react'
import CartItems from '../components/CartItems/CartItems'
import NavbarSection from '../components/Navbar/Navbar'
import FooterSection from '../components/Footer/Footer'

function Cart() {
  return (
    <div>
      <NavbarSection/>
      <CartItems/>
      <FooterSection/>
    </div>
  )
}

export default Cart
