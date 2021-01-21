import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  align?: 'left' | 'right'
}

const MessageStyled = styled.div<IProps>`
  ${({ theme, align }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    ${(!align || align === 'left') &&
    css`
      flex-direction: row;

      & > :not(:first-child) {
        margin-left: ${theme.sizes.stepSize}px;
      }
    `}
    ${align === 'right' &&
    css`
      flex-direction: row-reverse;

      & > :not(:first-child) {
        margin-right: ${theme.sizes.stepSize}px;
      }
    `}
  `}
`

export default MessageStyled
