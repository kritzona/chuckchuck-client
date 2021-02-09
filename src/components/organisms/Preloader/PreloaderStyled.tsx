import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const PreloaderStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 2000000;
    top: 0;
    left: 0;
    background-color: ${theme.colors.backgroundColor};
  `}
`

export default PreloaderStyled
