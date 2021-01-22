import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const SignInFormStyled = styled.div<IProps>`
  ${({ theme }) => css`
    & > *:not(:first-child) {
      margin-top: ${theme.sizes.stepSize * 2}px;
    }
  `}
`

export default SignInFormStyled
