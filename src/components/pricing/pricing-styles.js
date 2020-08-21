import styled from 'styled-components'

export const StyledPricing = styled.div`
  margin-top: 3rem;
  margin-bottom: 10rem;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 420px) {
    margin-bottom: 3rem;
  }
`

export const PricingHeader = styled.div`
  width: 100%;

  h1 {
    font-size: 3.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.black};
    line-height: 1.2;
    margin-bottom: 0;
  }
`

export const Prices = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 10px;
  margin-top: 5rem;

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`

export const PriceItem = styled.div`
  margin: 0 16px;
  padding: 1rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  border: 0.5px solid rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.colors.textLight};

  :first-child {
    background: ${({ theme }) => theme.colors.primary};
  }

  :last-child {
    background: ${({ theme }) => theme.colors.secondary};
  }

  button {
    margin-top: 1rem;
    margin-left: 1rem;
    align-self: flex-start;
  }

  @media screen and (max-width: 768px) {
    margin: 32px 16px;
  }

  @media screen and (max-width: 420px) {
    margin: 24px 0;
  }
`

export const PriceTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 12px;
  margin-top: 0;
  margin-bottom: 0;
`

export const PriceTag = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 16px;
  margin-top: 0.5rem;
  margin-bottom: 0;

  span {
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fontWeights.black};
  }

  @media screen and (max-width: 420px) {
    span {
      font-size: 2.5rem;
    }
  }
`

export const Description = styled.div`
  padding: 0 16px;

  p {
    font-size: 1rem;
    line-height: 1.5;
    opacity: 87%;
  }

  @media screen and (max-width: 420px) {
    p {
      font-size: 0.875rem;
    }
  }
`

export const FeatureList = styled.div`
  padding: 0 16px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;

  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem 0;

    span {
      display: inline-block;
      margin-left: 8px;
      font-size: 1.25rem;
      line-height: 1.2;
      opacity: 80%;
    }
  }

  @media screen and (max-width: 420px) {
    li {
      margin-bottom: 0.75rem;
      span {
        font-size: 1rem;
      }
    }
  }
`
