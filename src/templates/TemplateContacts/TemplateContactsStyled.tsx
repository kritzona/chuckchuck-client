import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TemplateContactsStyled = styled.div<IProps>`
  ${() => css`
    height: 100%;
    position: relative;
  `}
`

export default TemplateContactsStyled
