import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const PartHeaderStyled = styled.header<IProps>`
  ${({ theme }) => css`
    box-sizing: border-box;
    background-color: ${theme.colors.backgroundColor};
    box-shadow: ${theme.effects.boxShadow};
  `}
`
export const PartHeaderBodyStyled = styled.div<IProps>`
  ${({ theme }) => css`
    padding: ${theme.sizes.tsFontSize / 2}px 0;
  `}
`
