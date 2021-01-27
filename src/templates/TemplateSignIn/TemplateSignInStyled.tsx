import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const TemplateSignInStyled = styled.div<IProps>`
  ${() => css`
    min-height: 100%;
    position: relative;
    padding-bottom: 47px;
  `}
`
export const TemplateSignInHeaderStyled = styled.div<IProps>``
export const TemplateSignInContentStyled = styled.div<IProps>``
export const TemplateSignInFooterStyled = styled.div<IProps>`
  ${() => css`
    width: 100%;
    position: absolute;
    top: calc(100% - 47px);
    left: 0;
  `}
`
