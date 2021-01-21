import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  status?: string
}

const OnlineStatusStyled = styled.div<IProps>`
  ${({ theme, status }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    ${(!status || status === 'online') &&
    css`
      color: ${theme.colors.successColor};
    `}
    ${status === 'offline' &&
    css`
      color: ${theme.colors.errorColor};
    `}
  
    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize}px;
    }
  `}
`

export default OnlineStatusStyled
