import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TemplateSignInStyled = styled.div<IProps>`
  ${() => css``}
`

export default TemplateSignInStyled
