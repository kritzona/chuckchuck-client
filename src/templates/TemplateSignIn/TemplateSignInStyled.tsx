import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const TemplateSignInStyled = styled.div<IProps>`
  ${({ theme }) => css`
    // padding-top: ${theme.sizes.stepSize * 3 * 8}px;
  `}
`
export const TemplateSignInHeaderStyled = styled.div<IProps>`
  ${({ theme }) => css`
    box-sizing: border-box;
    background-color: ${theme.colors.backgroundColor};
    box-shadow: ${theme.effects.boxShadow};
  `}
`
export const TemplateSignInFormStyled = styled.div<IProps>`
  ${({ theme }) => css`
    padding-top: ${theme.sizes.stepSize * 3 * 8}px;
  `}
`
