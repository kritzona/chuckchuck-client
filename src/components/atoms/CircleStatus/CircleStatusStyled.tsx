import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  color?: string
}

const CircleStatusStyled = styled.div<IProps>`
  width: ${({ theme }) => theme.sizes.stepSize}px;
  height: ${({ theme }) => theme.sizes.stepSize}px;
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
  background-color: ${({ theme }) => theme.colors.successColor};
  border-radius: 50%;

  ${({ theme, color }) =>
    color === 'red' &&
    css`
      background-color: ${theme.colors.errorColor};
    `}
  ${({ theme, color }) =>
    color === 'green' &&
    css`
      background-color: ${theme.colors.successColor};
    `}
`

export default CircleStatusStyled
