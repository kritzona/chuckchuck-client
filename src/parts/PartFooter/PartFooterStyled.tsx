import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const PartFooterStyled = styled.div<IProps>`
  ${({ theme }) => css`
    box-sizing: border-box;
    background-color: ${theme.colors.backgroundMiddleColor};
  `}
`
export const PartFooterBodyStyled = styled.div<IProps>`
  ${({ theme }) => css`
    padding: ${theme.sizes.tsFontSize}px 0;
  `}
`
