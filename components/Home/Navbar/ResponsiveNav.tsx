'use client';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { useState } from 'react';

const ResponsiveNav = () => {
  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Nav openNav={openNavHandler} />
      <MobileNav
        closeNav={closeNavHandler}
        showNav={showNav}
      />
    </>
  );
};

export default ResponsiveNav;
