import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const PartFooterStyled = styled.div<IProps>`
  ${({ theme }) => css`
    box-sizing: border-box;
    background-color: ${theme.colors.backgroundColor};
  `}
`
export const PartFooterBodyStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${theme.sizes.tsFontSize}px 0;
  `}
`
