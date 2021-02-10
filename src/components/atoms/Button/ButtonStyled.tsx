import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  fullWidth?: boolean
}

const ButtonStyled = styled.button<IProps>`
  ${({ theme, fullWidth }) => css`
    color: ${theme.colors.blackColor};
    background: ${theme.colors.compColor};
    margin: 0;
    padding: ${theme.sizes.tsFontSize}px ${theme.sizes.tsFontSize * 3}px;
    outline: none;
    border: 2px solid ${theme.colors.compColor};
    border-radius: ${theme.sizes.borderRadius}px;
    transition: all 0.2s ease-in-out;
    user-select: none;
    cursor: pointer;

    width: ${fullWidth ? '100%' : 'auto'};

    &:focus {
      outline: none;
    }
    &:hover {
      background: ${theme.colors.hoverCompColor};
      outline: none;
      color: ${theme.colors.whiteColor};
      box-shadow: ${theme.effects.boxShadow};
      border-color: ${theme.colors.hoverCompColor};
    }
    &:active {
      background: ${theme.colors.activeCompColor};
      outline: none;
      color: ${theme.colors.whiteColor};
      box-shadow: ${theme.effects.boxShadow};
      border-color: ${theme.colors.activeCompColor};
    }
    &:disabled {
      background: ${theme.colors.greyColor};
      outline: none;
      color: ${theme.colors.whiteColor};
      box-shadow: none;
      cursor: not-allowed;
      border-color: ${theme.colors.greyColor};
    }

    @media screen and (max-width: 991.98px) {
      &:hover {
        background: ${theme.colors.compColor};
        outline: none;
        color: ${theme.colors.blackColor};
        box-shadow: none;
        border-color: ${theme.colors.compColor};
      }
      &:active {
        background: ${theme.colors.activeCompColor};
        outline: none;
        color: ${theme.colors.whiteColor};
        box-shadow: ${theme.effects.boxShadow};
        border-color: ${theme.colors.activeCompColor};
      }
      &:disabled {
        background: ${theme.colors.greyColor};
        outline: none;
        color: ${theme.colors.whiteColor};
        box-shadow: none;
        cursor: not-allowed;
        border-color: ${theme.colors.greyColor};
      }
    }
  `}
`

export default ButtonStyled
