import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  type?: 'button' | 'reset' | 'submit'
  fullWidth?: boolean
  woBackground?: boolean
}

const ButtonStyled = styled.button.attrs((props: IProps) => ({
  type: props.type ? props.type : 'button',
}))<IProps>`
  ${({ theme, fullWidth, woBackground }) => css`
    margin: 0;
    padding: ${theme.sizes.tsFontSize}px ${theme.sizes.tsFontSize * 3}px;
    outline: none;
    border-radius: ${theme.sizes.borderRadius}px;
    transition: all 0.2s ease-in-out;
    user-select: none;
    cursor: pointer;

    width: ${fullWidth ? '100%' : 'auto'};

    ${!woBackground &&
    css`
      color: ${theme.colors.blackColor};
      background: ${theme.colors.compColor};
      border: 2px solid ${theme.colors.compColor};
    `}
    ${woBackground &&
    css`
      color: ${theme.colors.textColor};
      background: transparent;
      border: 2px solid transparent;
    `}

    &:focus {
      outline: none;
    }
    &:hover {
      outline: none;

      ${!woBackground &&
      css`
        color: ${theme.colors.whiteColor};
        background: ${theme.colors.hoverCompColor};
        border-color: ${theme.colors.hoverCompColor};
        box-shadow: ${theme.effects.boxShadow};
      `}
      ${woBackground &&
      css`
        color: ${theme.colors.textColor};
        background: ${theme.colors.backgroundMiddleColor};
        border-color: ${theme.colors.backgroundMiddleColor};
        box-shadow: none;
      `}
    }
    &:active {
      outline: none;
      box-shadow: ${theme.effects.boxShadow};

      ${!woBackground &&
      css`
        color: ${theme.colors.whiteColor};
        background: ${theme.colors.activeCompColor};
        border-color: ${theme.colors.activeCompColor};
      `}
      ${woBackground &&
      css`
        color: ${theme.colors.textColor};
        background: ${theme.colors.backgroundMiddleColor};
        border-color: ${theme.colors.backgroundMiddleColor};
      `}
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
        outline: none;
        box-shadow: none;

        ${!woBackground &&
        css`
          color: ${theme.colors.blackColor};
          background: ${theme.colors.compColor};
          border: 2px solid ${theme.colors.compColor};
        `}
        ${woBackground &&
        css`
          color: ${theme.colors.textColor};
          background: transparent;
          border: 2px solid transparent;
        `}
      }
      &:active {
        outline: none;
        box-shadow: ${theme.effects.boxShadow};

        ${!woBackground &&
        css`
          color: ${theme.colors.whiteColor};
          background: ${theme.colors.activeCompColor};
          border-color: ${theme.colors.activeCompColor};
        `}
        ${woBackground &&
        css`
          color: ${theme.colors.textColor};
          background: ${theme.colors.backgroundMiddleColor};
          border-color: ${theme.colors.backgroundMiddleColor};
        `}
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
