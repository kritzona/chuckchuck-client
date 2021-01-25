import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const TemplateSignInStyled = styled.div<IProps>`
  ${() => css`
    height: 100%;
    position: relative;
  `}
`
export const TemplateSignInHeaderStyled = styled.div<IProps>``
export const TemplateSignInContentStyled = styled.div<IProps>``
export const TemplateSignInFooterStyled = styled.div<IProps>``
