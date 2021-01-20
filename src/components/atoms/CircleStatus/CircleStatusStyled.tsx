import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  color?: string
}

const CircleStatusStyled = styled.div<IProps>`
  ${({ theme, color }) => css`
    width: ${theme.sizes.stepSize}px;
    height: ${theme.sizes.stepSize}px;
    box-shadow: ${theme.effects.boxShadow};
    border-radius: 50%;

    ${(!color || color === 'green') &&
    css`
      background-color: ${theme.colors.successColor};
    `}
    ${color === 'red' &&
    css`
      background-color: ${theme.colors.errorColor};
    `}
  `}
`

export default CircleStatusStyled
