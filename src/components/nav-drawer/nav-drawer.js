import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'components/button/button'
import { StyledNavDrawer, DrawerLinks } from './nav-drawer-styles'

const NavDrawer = ({ isOpen }) => {
  return (
    <StyledNavDrawer isOpen={isOpen}>
      <DrawerLinks>
        <Link to="/">About</Link>
        <Link to="/">Courses</Link>
        <Link to="/">Pricing</Link>
        <Button as={Link} to="/">
          Sign up
        </Button>
      </DrawerLinks>
    </StyledNavDrawer>
  )
}

export default NavDrawer
