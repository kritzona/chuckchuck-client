import styled, { css, DefaultTheme } from 'styled-components'
import moonLightIconSource from '../../../assets/icons/moon-light.svg'
import moonDarkIconSource from '../../../assets/icons/moon-dark.svg'

interface IProps {
  theme: DefaultTheme
}

export const ToggleThemeStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize * 2}px;
    }
  `}
`
export const ToggleThemeMoonStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: ${theme.sizes.stepSize * 4}px;
    height: ${theme.sizes.stepSize * 4}px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

    ${theme.name === 'light' &&
    css`
      background-image: url(${moonDarkIconSource});
    `}
    ${theme.name === 'dark' &&
    css`
      background-image: url(${moonLightIconSource});
    `}
  `}
`
