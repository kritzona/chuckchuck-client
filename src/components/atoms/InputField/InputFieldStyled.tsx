import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  inFocus?: boolean
  disabled?: boolean
}

const InputFieldStyled = styled.div<IProps>`
  ${({ theme, inFocus, disabled }) => css`
    width: 100%;
    background-color: ${theme.colors.backgroundColor};

    border-radius: ${theme.sizes.borderRadius}px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;

    ${!inFocus &&
    !disabled &&
    css`
      border: 2px solid ${theme.colors.primaryColor};
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
