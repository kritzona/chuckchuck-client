import styled, { css, keyframes, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const spinKeyframes = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`
const PreloaderSpinnerStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: block;
    position: relative;
    width: 96px;
    height: 32px;
    margin: 0;
    border-radius: 100%;
    border: 3px solid transparent;
    border-top-color: ${theme.colors.primaryColor};
    animation: ${spinKeyframes} 2s linear infinite;

    &::before {
      content: '';
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: ${theme.colors.compColor};
      animation: ${spinKeyframes} 3s linear infinite;
    }
    &:after {
      content: '';
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: ${theme.colors.hoverCompColor};
      animation: ${spinKeyframes} 1.5s linear infinite;
    }
  `}
`

export default PreloaderSpinnerStyled
