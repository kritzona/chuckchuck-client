import styled, { css, DefaultTheme } from 'styled-components'
import clockDarkIconSource from '../../../assets/icons/clock-dark.svg'

interface IProps {
  theme: DefaultTheme
}

export const TimeStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: max-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: ${theme.colors.blackColor};

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize}px;
    }
  `}
`
export const TimeIconStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: ${theme.sizes.stepSize + 2}px;
    height: ${theme.sizes.stepSize + 2}px;
    background-color: transparent;
    background-image: url(${clockDarkIconSource});
    background-position: center center;
    background-size: contain;
  `}
`
