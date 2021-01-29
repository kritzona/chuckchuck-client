import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const ContactStyled = styled.div<IProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundMiddleColor};
    padding: ${theme.sizes.tsFontSize}px;
    box-sizing: border-box;
    border-radius: ${theme.sizes.borderRadius}px;
    box-shadow: ${theme.effects.boxShadow};
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > *:not(:first-child) {
      margin-top: ${theme.sizes.stepSize}px;
    }
  `}
`
export const ContactAlertStyled = styled.div<IProps>`
  ${({ theme }) => css`
    padding: ${theme.sizes.tsFontSize}px ${theme.sizes.tsFontSize * 2}px;
    text-align: center;
    box-sizing: border-box;
    opacity: 0.5;
  `}
`
