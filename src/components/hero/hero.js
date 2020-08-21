import React from 'react'
import styled from 'styled-components/macro'
import { useMediaQuery } from 'react-responsive'
import Button from 'components/button/button'
import Container from 'components/container/container'
import { ReactComponent as DotGridMD } from 'images/dot_grid_md.svg'
import { ReactComponent as DotGridLG } from 'images/dot_grid_lg.svg'
import HeroPng from 'images/023.png'
import {
  StyledHero,
  HeroDetailsContainer,
  HeroImgContainer,
  Heading,
  Subheading,
  InnerHero,
} from './hero-styles'

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 420 })

  return (
    <StyledHero>
      <div
        css={`
          position: absolute;
          top: 10%;
          left: 5%;

          @media screen and (min-width: 2500px) {
            left: 25%;
            top: 3%;
          }

          @media screen and (max-width: 420px) {
            top: 25%;
            left: -20%;
          }
        `}
      >
        <DotGridMD />
      </div>
      {!isMobile ? (
        <div
          css={`
            position: absolute;
            top: -50%;
            right: -8%;

            @media screen and (min-width: 2500px) {
              right: 15%;
              top: -30%;
            }
          `}
        >
          <DotGridLG />
        </div>
      ) : null}
      <Container>
        <InnerHero>
          <HeroDetailsContainer>
            <Heading>Knowledge at the palm of your hands.</Heading>
            <Subheading>
              Learn anytime, anywhere and at your own pace with Learnkit.
            </Subheading>
            <Button primary>Get Started</Button>
          </HeroDetailsContainer>
          <HeroImgContainer>
            <img src={HeroPng} alt="hero banner" />
          </HeroImgContainer>
        </InnerHero>
      </Container>
    </StyledHero>
  )
}

export default Hero
