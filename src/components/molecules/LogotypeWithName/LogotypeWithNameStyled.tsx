import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const LogotypeWithNameStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
    cursor: pointer;

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize * 2}px;
    }
  `}
`

export default LogotypeWithNameStyled
