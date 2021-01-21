import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  align?: 'left' | 'right'
}

const MessageBoxStyled = styled.div<IProps>`
  ${({ theme, align }) => css`
    width: max-content;
    max-width: 80%;
    margin: 0;
    padding: ${theme.sizes.stepSize}px ${theme.sizes.stepSize * 2}px;
    border-radius: ${theme.sizes.borderRadius * 3}px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: ${theme.effects.boxShadow};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & > *:not(:first-child) {
      margin-top: ${theme.sizes.stepSize}px;
    }

    ${(!align || align === 'left') &&
    css`
      background-color: ${theme.colors.compColor};
      align-items: flex-start;
      color: ${theme.colors.blackColor};

      &:hover {
        background-color: ${theme.colors.hoverCompColor};
        color: ${theme.colors.whiteColor};
      }
      &:active {
        background-color: ${theme.colors.activeCompColor};
        color: ${theme.colors.whiteColor};
      }
    `}

    ${align === 'right' &&
    css`
      color: ${theme.colors.whiteColor};
      background-color: ${theme.colors.primaryColor};
      align-items: flex-end;

      &:hover {
        background-color: ${theme.colors.hoverPrimaryColor};
        color: ${theme.colors.whiteColor};
      }
      &:active {
        background-color: ${theme.colors.activePrimaryColor};
        color: ${theme.colors.whiteColor};
      }
    `}
  `}
`

export default MessageBoxStyled
