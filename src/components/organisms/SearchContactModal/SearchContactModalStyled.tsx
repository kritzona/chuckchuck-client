import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const SearchContactModalStyled = styled.div<IProps>`
  ${() => css``}
`
export const SearchContactModalHeaderStyled = styled.div<IProps>`
  ${() => css``}
`
export const SearchContactModalContentStyled = styled.div<IProps>`
  ${({ theme }) => css`
    margin-top: ${theme.sizes.stepSize * 4}px;
    box-sizing: border-box;
  `}
`
export const SearchContactModalUsersStyled = styled.div<IProps>`
  ${() => css``}
`
export const SearchContactModalUserStyled = styled.div<IProps>`
  ${({ theme }) => css`
    padding: ${theme.sizes.tsFontSize}px ${theme.sizes.tsFontSize * 2}px;
    box-sizing: border-box;
    background-color: ${theme.colors.backgroundMiddleColor};
    border-radius: ${theme.sizes.borderRadius}px;
    box-shadow: ${theme.effects.boxShadow};

    &:not(:first-child) {
      margin-top: ${theme.sizes.stepSize}px;
    }
  `}
`
