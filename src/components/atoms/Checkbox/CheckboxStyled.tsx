import styled, { css, DefaultTheme } from 'styled-components'
import checkLightIconSource from '../../../assets/icons/check-light.svg'
import checkDarkIconSource from '../../../assets/icons/check-dark.svg'

interface IProps {
  theme: DefaultTheme
  checked?: boolean
}

const CheckboxStyled = styled.div<IProps>`
  ${({ theme, checked }) => css`
    width: ${theme.sizes.stepSize * 2.5}px;
    height: ${theme.sizes.stepSize * 2.5}px;
    background: ${checked
      ? theme.colors.textColor
      : theme.colors.backgroundMiddleColor};
    border: 2px solid ${theme.colors.textColor};
    box-sizing: border-box;
    border-radius: ${theme.sizes.borderRadius}px;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease-in-out;

    &::after {
      content: '';
      width: ${theme.sizes.stepSize + 2}px;
      height: ${theme.sizes.stepSize + 2}px;
      top: calc(50% - 5px);
      left: calc(50% - 5px);

      ${theme.name === 'light' &&
      css`
        background-image: url(${checkLightIconSource});
      `}
      ${theme.name === 'dark' &&
      css`
        background-image: url(${checkDarkIconSource});
      `}
      
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      border-radius: 50%;
      position: absolute;
      display: ${checked ? 'block' : 'none'};
    }

    &:hover {
      background: ${theme.colors.textColor};
      opacity: 0.5;

      &::after {
        display: block;
      }
    }
  `}
`

export default CheckboxStyled
