import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const LogoutStyled = styled.div<IProps>`
  ${() => css``}
`

export default LogoutStyled
