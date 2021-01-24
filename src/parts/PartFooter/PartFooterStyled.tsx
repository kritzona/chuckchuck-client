import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const PartFooterStyled = styled.footer<IProps>`
  ${({ theme }) => css`
    box-sizing: border-box;
    background-color: ${theme.colors.backgroundColor};
  `}
`

export default PartFooterStyled
