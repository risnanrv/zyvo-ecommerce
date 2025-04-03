import React from 'react'
import NavbarSection from '../components/Navbar/Navbar'
import CaroseulHero from '../components/Carousel/CarouselHero'
import CategorySection from '../components/CategorySection/CategorySection'
import NewCollections from '../components/NewCollections/NewCollections'
import FooterSection from '../components/Footer/Footer'
import Partners from '../components/Partners/Partners'

function Home() {
  return (
    <div>
      <NavbarSection/>
      <CaroseulHero/>
      <CategorySection/>
      <NewCollections/>
      <Partners/>
      <FooterSection/>
    </div>
  )
}

export default Home ;
