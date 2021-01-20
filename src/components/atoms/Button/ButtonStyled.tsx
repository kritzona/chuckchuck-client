import styled, { DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  fullWidth?: boolean
}

const ButtonStyled = styled.button<IProps>`
  color: inherit;
  background: ${({ theme }) => theme.colors.compColor};
  margin: 0;
  padding: ${({ theme }) => theme.sizes.tsFontSize}px
    ${({ theme }) => theme.sizes.tsFontSize * 3}px;
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.compColor};
  border-radius: ${({ theme }) => theme.sizes.borderRadius}px;
  transition: all 0.2s ease-in-out;
  user-select: none;

  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  &:focus {
    outline: none;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.hoverCompColor};
    outline: none;
    color: ${({ theme }) => theme.colors.whiteColor};
    box-shadow: ${({ theme }) => theme.effects.boxShadow};
    border-color: ${({ theme }) => theme.colors.hoverCompColor};
  }
  &:active {
    background: ${({ theme }) => theme.colors.activeCompColor};
    outline: none;
    color: ${({ theme }) => theme.colors.whiteColor};
    box-shadow: ${({ theme }) => theme.effects.boxShadow};
    border-color: ${({ theme }) => theme.colors.activeCompColor};
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.greyColor};
    outline: none;
    color: ${({ theme }) => theme.colors.whiteColor};
    box-shadow: none;
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.greyColor};
  }
`

export default ButtonStyled
