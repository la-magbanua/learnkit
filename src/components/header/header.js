import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { IoIosMenu } from 'react-icons/io'
import Container from 'components/container/container'
import Button from 'components/button/button'
import {
  StyledHeader,
  InnerHeader,
  Brand,
  MenuLinks,
  NavBurger,
} from './header-styles'
import NavDrawer from 'components/nav-drawer/nav-drawer'

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 420 })
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  return (
    <>
      <StyledHeader>
        <Container>
          <InnerHeader>
            <div>
              <Link to="/">
                <Brand>Learnkit</Brand>
              </Link>
            </div>
            {isMobile ? (
              <NavBurger onClick={() => setDrawerIsOpen(prev => !prev)}>
                <IoIosMenu size="1.5rem" />
              </NavBurger>
            ) : (
              <MenuLinks>
                <Link to="/">About</Link>
                <Link to="/">Courses</Link>
                <Link to="/">Pricing</Link>
                <Button as={Link} to="/" navBtn primary>
                  Sign up
                </Button>
              </MenuLinks>
            )}
          </InnerHeader>
        </Container>
        <NavDrawer isOpen={drawerIsOpen} className="nav-drawer" />
      </StyledHeader>
    </>
  )
}

export default Header
