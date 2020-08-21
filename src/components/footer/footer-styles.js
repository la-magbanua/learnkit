import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.bg2};
  color: ${({ theme }) => theme.colors.text};
`

export const InnerFooter = styled.div`
  padding: 6rem 0 4rem;

  @media screen and (max-width: 420px) {
    padding: 3rem 0;
  }
`

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-around;

  div {
    ul {
      margin-top: 2rem;
      list-style: none;
      padding-inline-start: 0;

      li {
        font-size: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        line-height: 1.25;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.text};
          opacity: 80%;
          transition: 0.3s color ease;

          &:hover {
            opacity: 100%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 420px) {
    padding: 3rem 0;
    flex-direction: column;
  }
`

export const Brand = styled.div`
  a {
    color: ${({ theme }) => theme.colors.text};
    h1 {
      font-weight: ${({ theme }) => theme.fontWeights.black};
    }
  }
`

export const FooterCopy = styled.div`
  margin-top: 8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`

export const Socials = styled.div`
  display: flex;

  a {
    color: ${({ theme }) => theme.colors.text};
    opacity: 60%;
    transition: 0.3s color ease;

    &:hover {
      opacity: 100%;
    }

    :not(:last-child) {
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 1rem;
  }
`

export const Terms = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    margin: 0;

    li {
      display: inline-block;
      list-style-type: none;

      :not(:last-child) {
        margin-right: 1.25rem;
      }

      a {
        display: inline-block;
        text-decoration: none;
        font-size: 13px;
        color: ${({ theme }) => theme.colors.text};
        opacity: 60%;
      }
    }
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 1rem;

    ul {
      li {
        :not(:last-child) {
          margin-right: 1rem;
        }
        a {
          font-size: 11px;
        }
      }
    }
  }
`

export const Copy = styled.div`
  p {
    opacity: 60%;
    font-size: 13px;
  }
`
