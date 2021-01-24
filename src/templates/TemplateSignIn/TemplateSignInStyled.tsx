import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const TemplateSignInStyled = styled.div<IProps>`
  ${({ theme }) => css`
    height: 100%;
    position: relative;
  `}
`
export const TemplateSignInFormStyled = styled.div<IProps>`
  ${({ theme }) => css`
    padding-top: ${theme.sizes.stepSize * 8}px;
    padding-bottom: ${theme.sizes.stepSize * 8}px;
  `}
`
