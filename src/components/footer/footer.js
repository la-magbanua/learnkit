import React from 'react'
import { Link } from 'react-router-dom'
import {
  GrFacebook,
  GrInstagram,
  GrTwitter,
  GrYoutube,
  GrLinkedin,
} from 'react-icons/gr'
import Container from 'components/container/container'
import {
  StyledFooter,
  InnerFooter,
  FooterLinks,
  Brand,
  FooterCopy,
  Socials,
  Terms,
  Copy,
} from './footer-styles'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <InnerFooter>
          <FooterLinks>
            <Brand>
              <Link to="/">
                <h1>Learnkit</h1>
              </Link>
            </Brand>
            <div>
              <h2>Courses</h2>
              <ul>
                <li>
                  <Link to="/">Computer Science</Link>
                </li>
                <li>
                  <Link to="/">Design</Link>
                </li>
                <li>
                  <Link to="/">Sciences</Link>
                </li>
                <li>
                  <Link to="/">Engineering</Link>
                </li>
                <li>
                  <Link to="/">Animation</Link>
                </li>
                <li>
                  <Link to="/">Business</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>Company</h2>
              <ul>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Culture</Link>
                </li>
                <li>
                  <Link to="/">Jobs</Link>
                </li>
                <li>
                  <Link to="/">Technology</Link>
                </li>
                <li>
                  <Link to="/">Security</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>Support</h2>
              <ul>
                <li>
                  <Link to="/">Getting started</Link>
                </li>
                <li>
                  <Link to="/">Suggest a feature</Link>
                </li>
                <li>
                  <Link to="/">Help center</Link>
                </li>
                <li>
                  <Link to="/">Server status</Link>
                </li>
                <li>
                  <Link to="/">Report a bug</Link>
                </li>
                <li>
                  <Link to="/">Press kit</Link>
                </li>
              </ul>
            </div>
          </FooterLinks>
          <FooterCopy>
            <Socials>
              <Link to="/">
                <GrTwitter size="1.2rem" />
              </Link>
              <Link to="/">
                <GrFacebook size="1.2rem" />
              </Link>
              <Link to="/">
                <GrInstagram size="1.2rem" />
              </Link>
              <Link to="/">
                <GrYoutube size="1.2rem" />
              </Link>
              <Link to="/">
                <GrLinkedin size="1.2rem" />
              </Link>
            </Socials>
            <Terms>
              <ul>
                <li>
                  <Link to="/">Terms of service</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Licenses</Link>
                </li>
                <li>
                  <Link to="/">Sitemap</Link>
                </li>
              </ul>
            </Terms>
            <Copy>
              <p>Copyright &copy; {new Date().getFullYear()} Learnkit</p>
            </Copy>
          </FooterCopy>
        </InnerFooter>
      </Container>
    </StyledFooter>
  )
}

export default Footer
