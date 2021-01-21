import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const UserStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize * 2}px;
    }
  `}
`
export const UserAvatarStyled = styled.div<IProps>``
export const UserInfoStyled = styled.div<IProps>``
