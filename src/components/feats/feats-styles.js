import styled from 'styled-components'

export const StyledSect = styled.div`
  margin-top: 0;
  padding: 5rem 0;
  position: relative;

  h2 {
    font-size: 3.5rem;
    line-height: 1.2;
    font-weight: ${({ theme }) => theme.fontWeights.black};
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 420px) {
    h2 {
      font-size: 2.5rem;
    }
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  border-radius: 16px;
  background: #fff;

  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 1.2;
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  p {
    line-height: 1.2;
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    opacity: 87%;
  }
`

export const ItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`
