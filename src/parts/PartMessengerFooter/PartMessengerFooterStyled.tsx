import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const PartMessengerFooterStyled = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    background-color: ${theme.colors.backgroundColor};
    box-shadow: ${theme.effects.boxShadow};
  `}
`
export const PartMessengerFooterBodyStyled = styled.div<IProps>`
  ${({ theme }) => css`
    padding: ${theme.sizes.tsFontSize}px 0;
  `}
`
