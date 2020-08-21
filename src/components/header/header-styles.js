import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  background: ${({ theme }) => theme.colors.bg};
  z-index: 9999999;
`

export const InnerHeader = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Brand = styled.h3`
  cursor: pointer;
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeights.black};
  color: ${({ theme }) => theme.colors.text};
`

export const MenuLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99999999;

  a {
    display: inline-flex;
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-size: 14px;

    &:not(:last-child) {
      margin-right: 48px;
    }
  }
`

export const NavBurger = styled.span`
  display: inline-block;
  cursor: pointer;
  z-index: 99999;
`
