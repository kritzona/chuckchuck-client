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
  ${() => css`
    display: block;
    position: relative;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #9370db;
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
      border-top-color: #ba55d3;
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
      border-top-color: #ff00ff;
      animation: ${spinKeyframes} 1.5s linear infinite;
    }
  `}
`

export default PreloaderSpinnerStyled
