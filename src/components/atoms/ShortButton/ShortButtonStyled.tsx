import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  circle?: boolean
  woBackground?: boolean
  iconAlign?: 'left' | 'center' | 'right'
}

export const ShortButtonStyled = styled.button<IProps>`
  ${({ theme, circle, woBackground, iconAlign }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: ${theme.sizes.tsFontSize +
    theme.sizes.tsLineHeight +
    theme.sizes.tsFontSize}px;
    height: ${theme.sizes.tsFontSize +
    theme.sizes.tsLineHeight +
    theme.sizes.tsFontSize}px;
    color: inherit;
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
    transition: all 0.2s ease-in-out;
    user-select: none;

    &:focus {
      outline: none;
    }

    ${!woBackground &&
    css`
      background-color: ${theme.colors.compColor};

      ${(!iconAlign || iconAlign === 'center') &&
      css`
        justify-content: center;
      `}
      ${iconAlign === 'left' &&
      css`
        justify-content: flex-start;
      `}
      ${iconAlign === 'right' &&
      css`
        justify-content: flex-end;
      `}

      & > img[data-icon-theme='light'] {
        display: none;
      }
      & > img[data-icon-theme='dark'] {
        display: block;
      }

      &:hover,
      &:active,
      &:disabled {
        & > img[data-icon-theme='light'] {
          display: block;
        }
        & > img[data-icon-theme='dark'] {
          display: none;
        }
      }

      &:hover {
        background-color: ${theme.colors.hoverCompColor};
        outline: none;
        color: ${theme.colors.whiteColor};
        box-shadow: ${theme.effects.boxShadow};
      }
      &:active {
        background-color: ${theme.colors.activeCompColor};
        outline: none;
        color: ${theme.colors.whiteColor};
        box-shadow: ${theme.effects.boxShadow};
      }
      &:disabled {
        background-color: ${theme.colors.greyColor};
        outline: none;
        color: ${theme.colors.whiteColor};
        box-shadow: none;
        cursor: not-allowed;
      }

      @media screen and (max-width: 991.98px) {
        &:hover {
          background-color: ${theme.colors.compColor};
          outline: none;
          color: ${theme.colors.blackColor};
          box-shadow: none;

          & > img[data-icon-theme='light'] {
            display: none;
          }
          & > img[data-icon-theme='dark'] {
            display: block;
          }
        }
        &:active {
          background-color: ${theme.colors.activeCompColor};
          outline: none;
          color: ${theme.colors.whiteColor};
          box-shadow: ${theme.effects.boxShadow};

          & > img[data-icon-theme='light'] {
            display: block;
          }
          & > img[data-icon-theme='dark'] {
            display: none;
          }
        }
      }
    `}
    ${!circle &&
    css`
      border-radius: ${theme.sizes.borderRadius}px;
    `}

    ${woBackground &&
    css`
      background-color: transparent;
      justify-content: flex-start;

      ${(!iconAlign || iconAlign === 'left') &&
      css`
        justify-content: flex-start;
      `}
      ${iconAlign === 'center' &&
      css`
        justify-content: center;
      `}
      ${iconAlign === 'right' &&
      css`
        justify-content: flex-end;
      `}

      ${(!theme.name || theme.name === 'light') &&
      css`
        & > img[data-icon-theme='light'] {
          display: none;
        }
        & > img[data-icon-theme='dark'] {
          display: block;
        }
      `}
      ${theme.name === 'dark' &&
      css`
        & > img[data-icon-theme='light'] {
          display: block;
        }
        & > img[data-icon-theme='dark'] {
          display: none;
        }
      `}

      &:hover,
      &:active,
      &:disabled {
        background-color: ${theme.colors.backgroundMiddleColor};
        justify-content: center;
      }

      @media screen and (max-width: 991.98px) {
        &:hover {
          background-color: transparent;
        }
        &:active,
        &:disabled {
          background-color: ${theme.colors.backgroundMiddleColor};
          justify-content: center;
        }
      }
    `}
    ${circle &&
    css`
      border-radius: 50%;
    `}
  `}
`
export const ShortButtonIconStyled = styled.img`
  ${({ theme }) => css`
    width: ${theme.sizes.stepSize * 3}px;
    height: ${theme.sizes.stepSize * 3}px;
  `}
`
