import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  state?: string
  disabled?: boolean
}

const InputLabelStyled = styled.label<IProps>`
  margin: 0 0 ${({ theme }) => theme.sizes.stepSize}px;
  cursor: pointer;

  ${({ theme, state }) =>
    state === 'error' &&
    css`
      color: ${theme.colors.errorColor};
    `}
  ${({ theme, state }) =>
    state === 'success' &&
    css`
      color: ${theme.colors.successColor};
    `}
  ${({ theme, disabled }) =>
    disabled &&
    css`
      color: ${theme.colors.greyColor};
    `}
`

export default InputLabelStyled
