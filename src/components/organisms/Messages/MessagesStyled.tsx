import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const MessagesStyled = styled.div<IProps>`
  ${({ theme }) => css`
    height: auto;
    padding: ${theme.sizes.tsFontSize * 2}px 0;

    & > *:not(:first-child) {
      margin-top: ${theme.sizes.stepSize}px;
    }
  `}
`

export default MessagesStyled
