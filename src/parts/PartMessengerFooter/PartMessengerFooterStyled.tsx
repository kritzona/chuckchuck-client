import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const PartMessengerFooterStyled = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    background-color: ${theme.colors.backgroundColor};
    box-shadow: ${theme.effects.boxShadow};
  `}
`

export default PartMessengerFooterStyled
