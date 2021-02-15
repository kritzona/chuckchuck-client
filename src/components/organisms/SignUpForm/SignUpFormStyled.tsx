import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const SignUpFormStyled = styled.form<IProps>`
  ${({ theme }) => css`
    & > *:not(:first-child) {
      margin-top: ${theme.sizes.stepSize * 2}px;
    }
  `}
`

export default SignUpFormStyled
