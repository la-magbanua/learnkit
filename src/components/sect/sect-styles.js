import styled, { css } from 'styled-components'

export const StyledSect = styled.div`
  margin-top: 5rem;
  position: relative;

  @media screen and (max-width: 420px) {
    margin-top: 3.5rem;
  }
`

export const SectBlock = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  overflow: hidden;

  @media screen and (max-width: 420px) {
    padding: 3rem 0;
  }
`

export const SectDetails = styled.div`
  max-width: 500px;
  margin-left: 6rem;
  z-index: 9;

  ${props =>
    props.alternate &&
    css`
      order: 1;
    `};

  h1 {
    font-size: 3.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.black};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 1.2;
    max-width: 450px;
    opacity: 87%;
    margin-bottom: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    margin-left: 1rem;
    max-width: 380px;
    width: 100%;

    h1 {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 420px) {
    order: 1;
    margin-left: 0;
    margin-top: 1rem;
    padding: 0 2rem;
    max-width: 100%;
    width: 100%;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`

export const SectImg = styled.div`
  width: 450px;
  z-index: 9;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    width: 250px;
  }

  @media screen and (max-width: 420px) {
    width: 200px;
  }
`
