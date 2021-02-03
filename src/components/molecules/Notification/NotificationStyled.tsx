import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  status: 'info' | 'success' | 'error'
}

const NotificationStyled = styled.div<IProps>`
  ${({ theme, status }) => css`
    padding: ${theme.sizes.tsFontSize}px ${theme.sizes.tsFontSize * 2}px;
    box-sizing: border-box;
    box-shadow: ${theme.effects.boxShadow};
    text-align: center;
    border-radius: ${theme.sizes.borderRadius}px;

    ${status === 'info' &&
    css`
      color: ${theme.colors.textColor};
      background-color: ${theme.colors.backgroundMiddleColor};
    `}
    ${status === 'success' &&
    css`
      color: ${theme.colors.whiteColor};
      background-color: ${theme.colors.successColor};
    `}
    ${status === 'error' &&
    css`
      color: ${theme.colors.whiteColor};
      background-color: ${theme.colors.errorColor};
    `}
    
    &:not(:first-child) {
      margin-top: ${theme.sizes.stepSize * 2}px;
    }
  `}
`

export default NotificationStyled
