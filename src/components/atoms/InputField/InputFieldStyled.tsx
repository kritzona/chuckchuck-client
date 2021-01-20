import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  inFocus?: boolean
  disabled?: boolean
}

const InputFieldStyled = styled.div<IProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 2px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: ${({ theme }) => theme.sizes.borderRadius}px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({ theme, inFocus }) =>
    inFocus &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.compColor};
      box-shadow: ${({ theme }) => theme.effects.boxShadow};
    `}
  ${({ theme, disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.greyColor};
      border: 2px solid ${({ theme }) => theme.colors.greyColor};
      cursor: not-allowed;
    `}
`

export default InputFieldStyled
