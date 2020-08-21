import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background: #000;
  color: #fff;
  padding: 16px 24px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 9;

  ${props =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.colors.primary};
    `};

  ${props =>
    props.accent &&
    css`
      background: ${({ theme }) => theme.colors.accent};
    `};

  ${props =>
    props.secondary &&
    css`
      background: ${({ theme }) => theme.colors.secondary};
    `};

  ${props =>
    props.fullWidth &&
    css`
      display: block;
      width: 100%;
    `};

  ${props =>
    props.navBtn &&
    css`
      padding: 12px 24px;
      text-transform: initial;
      color: #eee !important;
    `};

  ${props =>
    props.huge &&
    css`
      padding: 24px 36px;

      @media screen and (max-width: 768px) {
        padding: 18px 24px;
      }
    `}

  ${props =>
    props.w &&
    css`
      width: ${props.w}px;
    `};

  ${props =>
    props.inverse &&
    css`
      background: ${({ theme }) => theme.colors.bg};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      color: ${({ theme }) => theme.colors.text};
    `};

  ${props =>
    props.darkText &&
    css`
      color: ${({ theme }) => theme.colors.text};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
    `}

  ${props =>
    props.link &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.colors.secondary};
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      font-size: 1rem;

      svg {
        transition: 0.25s all ease;
      }

      &:hover {
        svg {
          transform: translateX(8px);
        }
      }

      @media screen and (max-width: 420px) {
        font-size: 0.8rem;
      }
    `};
`
