import styled, { css, DefaultTheme } from 'styled-components'
import logotypeOnWhiteImageSource from '../../../assets/images/logotype-on-white.svg'

interface IProps {
  theme: DefaultTheme
}

const LogotypeStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: ${theme.sizes.tsFontSize +
    theme.sizes.tsLineHeight +
    theme.sizes.tsFontSize}px;
    height: ${theme.sizes.tsFontSize +
    theme.sizes.tsLineHeight +
    theme.sizes.tsFontSize}px;
    background-image: url(${logotypeOnWhiteImageSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    cursor: pointer;
  `}
`

export default LogotypeStyled
