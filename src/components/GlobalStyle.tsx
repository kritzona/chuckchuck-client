import { createGlobalStyle, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const GlobalStyle = createGlobalStyle<IProps>`
  @import '~bootstrap/scss/bootstrap';
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  body {
    margin: 0 auto;
    padding: 0;
    -webkit-font-smoothing: subpixel-antialiased;
    font-family: 'Montserrat', sans-serif;
    font-size: ${({ theme }) => theme.sizes.tsFontSize}px;
    font-weight: ${({ theme }) => theme.sizes.regularFontWeight};
    font-style: normal;
    line-height: ${({ theme }) => theme.sizes.tsLineHeight}px;
    color: ${({ theme }) => theme.colors.textColor};
  }

  input {
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.textColor};
  }
`
