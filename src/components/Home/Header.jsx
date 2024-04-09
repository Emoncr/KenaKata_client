"use client"
import React from 'react'
import TopHeader from '../GlobalComponents/TopHeader'
import MiddleHeader from '../GlobalComponents/MiddleHeader'
import BottomHeader from '../GlobalComponents/BottomHeader'
import NavbarMobile from '../GlobalComponents/NavbarMobile'


const Header = () => {

  return (
    <header>
      <div className='hidden lg:block'>
        <TopHeader />
        <MiddleHeader />
        <BottomHeader />
      </div>
      <div className='lg:hidden '>
        <NavbarMobile />
      </div>
    </header>
  )
}

export default Header