import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const TemplateContactsStyled = styled.div<IProps>`
  ${() => css`
    height: 100%;
    position: relative;
  `}
`
export const TemplateContactsHeaderStyled = styled.div<IProps>``
export const TemplateContactsContentStyled = styled.div<IProps>`
  overflow-y: auto;
  box-sizing: border-box;
`
export const TemplateContactsFooterStyled = styled.div<IProps>``
