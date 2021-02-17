import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  status?: 'normal' | 'success' | 'error'
  inFocus?: boolean
  disabled?: boolean
}

const InputFieldStyled = styled.div<IProps>`
  ${({ theme, status, inFocus, disabled }) => css`
    width: 100%;
    background-color: ${theme.colors.backgroundMiddleColor};

    border-radius: ${theme.sizes.borderRadius}px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;

    ${!inFocus &&
    !disabled &&
    (!status || status === 'normal') &&
    css`
      border: 2px solid ${theme.colors.primaryColor};
    `}

    ${status === 'success' &&
    css`
      border: 2px solid ${theme.colors.successColor};
    `}
    ${status === 'error' &&
    css`
      border: 2px solid ${theme.colors.errorColor};
    `}

    ${inFocus &&
    css`
      border: 2px solid ${theme.colors.compColor};
      box-shadow: ${theme.effects.boxShadow};
    `}
    ${disabled &&
    css`
      color: ${theme.colors.greyColor};
      border: 2px solid ${theme.colors.greyColor};
      cursor: not-allowed;
    `}
  `}
`

export default InputFieldStyled
