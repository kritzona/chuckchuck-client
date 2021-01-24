import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const PartContentStyled = styled.main<IProps>`
  ${({ theme }) => css`
    padding-top: ${theme.sizes.stepSize * 8}px;
    padding-bottom: ${theme.sizes.stepSize * 8}px;
    box-sizing: border-box;
  `}
`

export default PartContentStyled
