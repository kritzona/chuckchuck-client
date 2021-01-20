import styled, { css, DefaultTheme } from 'styled-components'
import crossLightIconSource from '../../../assets/icons/cross-light.svg'
import checkLightIconSource from '../../../assets/icons/check-light.svg'

interface IProps {
  theme: DefaultTheme
  status?: string
}

const InputStatusStyled = styled.div<IProps>`
  ${({ theme, status }) => css`
    width: ${theme.sizes.stepSize * 4}px;
    height: ${theme.sizes.stepSize * 4}px;
    background-color: ${theme.colors.successColor};
    background-image: url(${checkLightIconSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: ${theme.sizes.stepSize + theme.sizes.stepSize / 4}px
      ${theme.sizes.stepSize + theme.sizes.stepSize / 4}px;
    border-radius: 50%;

    ${status === 'error' &&
    css`
      background-color: ${theme.colors.errorColor};
      background-image: url(${crossLightIconSource});
    `}
    ${status === 'success' &&
    css`
      background-color: ${theme.colors.successColor};
      background-image: url(${checkLightIconSource});
    `}
  `}
`

export default InputStatusStyled
