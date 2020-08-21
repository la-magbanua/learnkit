import styled from 'styled-components'

export const StyledCTA = styled.div`
  position: relative;
`

export const InnerCTA = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  h3 {
    margin-bottom: 4rem;
    font-size: 3.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.black};
    line-height: 1.2;
    z-index: 9;

    @media screen and (max-width: 420px) {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`
