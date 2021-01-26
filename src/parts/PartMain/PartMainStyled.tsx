import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const PartMainStyled = styled.div<IProps>`
  ${() => css`
    height: 100%;
  `}
`

export default PartMainStyled
