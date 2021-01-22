import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css'

interface IProps {
  theme: DefaultTheme
}

export const GlobalStyle = createGlobalStyle<IProps>`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  
  ${({ theme }) => css`
    body {
      margin: 0 auto;
      padding: 0;
      -webkit-font-smoothing: subpixel-antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: 'Montserrat', sans-serif;
      font-size: ${theme.sizes.tsFontSize}px;
      font-weight: ${theme.sizes.regularFontWeight};
      font-style: normal;
      line-height: ${theme.sizes.tsLineHeight}px;
      color: ${theme.colors.textColor};
      background-color: ${theme.colors.backgroundColor};
    }

    input {
      font-family: 'Montserrat', sans-serif;
      color: ${theme.colors.textColor};
    }
  `}
`
