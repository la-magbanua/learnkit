import styled from 'styled-components'

export const StyledHero = styled.div`
  position: relative;
  overflow: hidden;
  padding: 1rem 0;
`

export const InnerHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`

export const HeroDetailsContainer = styled.div`
  margin-right: 2rem;
  z-index: 9;

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }

  @media screen and (max-width: 420px) {
    order: 2;
  }
`

export const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.black};
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 2.5rem;
  }
`

export const Subheading = styled.p`
  max-width: 500px;
  margin-bottom: 2.5rem;
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text};
  opacity: 87%;

  @media screen and (max-width: 768px) {
    max-width: 300px;
  }

  @media screen and (max-width: 420px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`

export const HeroImgContainer = styled.div`
  width: 450px;
  z-index: 9;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    order: 1;
  }

  @media screen and (max-width: 420px) {
    width: 200px;
    order: 1;
  }
`
