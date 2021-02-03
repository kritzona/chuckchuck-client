import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const NotificationsStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 1000000;
    pointer-events: none;
    padding-top: ${theme.sizes.stepSize}px;
  `}
`

export default NotificationsStyled
