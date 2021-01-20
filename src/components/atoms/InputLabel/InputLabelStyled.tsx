import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  status?: string
  disabled?: boolean
}

const InputLabelStyled = styled.label<IProps>`
  ${({ theme, status, disabled }) => css`
    margin: 0 0 ${theme.sizes.stepSize}px;
    cursor: pointer;

    ${status === 'error' &&
    css`
      color: ${theme.colors.errorColor};
    `}
    ${status === 'success' &&
    css`
      color: ${theme.colors.successColor};
    `}
    ${disabled &&
    css`
      color: ${theme.colors.greyColor};
    `}
  `}
`

export default InputLabelStyled
