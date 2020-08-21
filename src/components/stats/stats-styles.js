import styled from 'styled-components'

export const StyledStats = styled.div`
  position: relative;
  margin-top: 3rem;
  padding: 3rem 0;

  @media screen and (max-width: 420px) {
    padding: 3rem 0;
  }
`

export const InnerStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9;

  h3 {
    align-self: flex-start;
    font-size: 3.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.black};
    text-align: center;
    line-height: 1.2;
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 2.5rem;
    text-align: initial;
  }
`

export const StatsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 2rem;

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(auto-fit, 1fr);
    margin-top: 3rem;
    grid-row-gap: 5rem;
  }
`

export const StatItem = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 9;

  h2 {
    font-size: 3.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.black};
    margin-bottom: 0;
    margin-top: 0;
  }

  p {
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    opacity: 80%;
  }

  @media screen and (max-width: 420px) {
    align-items: center;

    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.25rem;
      text-align: center;
    }
  }
`
