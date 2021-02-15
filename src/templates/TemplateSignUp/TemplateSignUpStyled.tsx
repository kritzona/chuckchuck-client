import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const TemplateSignUpStyled = styled.div<IProps>`
  ${() => css`
    min-height: 100%;
    position: relative;
    padding-bottom: 47px;
  `}
`
export const TemplateSignUpHeaderStyled = styled.div<IProps>``
export const TemplateSignUpContentStyled = styled.div<IProps>``
export const TemplateSignUpFooterStyled = styled.div<IProps>`
  ${() => css`
    width: 100%;
    position: absolute;
    top: calc(100% - 47px);
    left: 0;
  `}
`
