import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  lightIconSource: string
  darkIconSource: string
  circle?: boolean
  woBackground?: boolean
}

const ShortButtonStyled = styled.button<IProps>`
  ${({ theme, lightIconSource, darkIconSource, circle, woBackground }) => css`
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
    background-image: url(${darkIconSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: ${theme.sizes.stepSize * 3}px ${theme.sizes.stepSize * 3}px;

    ${!woBackground &&
    css`
      background-color: ${theme.colors.compColor};
      justify-content: center;
    `}
    ${!circle &&
    css`
      border-radius: ${theme.sizes.borderRadius}px;
    `}

    &:focus {
      outline: none;
    }
    &:hover {
      background-color: ${theme.colors.hoverCompColor};
      background-image: url(${lightIconSource});
      outline: none;
      color: ${theme.colors.whiteColor};
      box-shadow: ${theme.effects.boxShadow};
    }
    &:active {
      background-color: ${theme.colors.activeCompColor};
      background-image: url(${lightIconSource});
      outline: none;
      color: ${theme.colors.whiteColor};
      box-shadow: ${theme.effects.boxShadow};
    }
    &:disabled {
      background-color: ${theme.colors.greyColor};
      background-image: url(${lightIconSource});
      outline: none;
      color: ${theme.colors.whiteColor};
      box-shadow: none;
      cursor: not-allowed;
    }

    ${woBackground &&
    css`
      background-color: transparent;
      justify-content: flex-start;

      &:hover,
      &:active,
      &:disabled {
        background-color: transparent;
        justify-content: center;
      }
    `}
    ${circle &&
    css`
      border-radius: 50%;
    `}
  `}
`

export default ShortButtonStyled
