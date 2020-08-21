import styled, { css } from 'styled-components'

export const StyledNavDrawer = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  opacity: 0;
  transform: translateY(-20vh);
  transition: 0.2s all ease;

  ${props =>
    props.isOpen &&
    css`
      opacity: 1;
      transform: translateY(0);
    `};
`

export const DrawerLinks = styled.div`
  background: ${({ theme }) => theme.colors.bg2};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px;

  a {
    display: block;
    margin: 1.5rem 0;
  }

  a:not(:last-child) {
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.text};
  }
`
