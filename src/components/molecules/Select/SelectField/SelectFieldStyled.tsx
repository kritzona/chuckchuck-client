import styled, { css, DefaultTheme } from 'styled-components'
import selectArrowDownLightIconSource from '../../../../assets/icons/select-arrow-down-light.svg'
import selectArrowDownDarkIconSource from '../../../../assets/icons/select-arrow-down-dark.svg'

interface IProps {
  theme: DefaultTheme
  active?: boolean
}

const SelectFieldStyled = styled.div<IProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 100%;
    padding: ${theme.sizes.tsFontSize}px ${theme.sizes.tsFontSize * 2}px;
    padding-right: ${theme.sizes.tsFontSize * 4}px;
    cursor: pointer;
    position: relative;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;

    &::after {
      content: '';
      width: ${theme.sizes.stepSize * 4}px;
      height: ${theme.sizes.stepSize * 4}px;
      position: absolute;
      top: ${(theme.sizes.tsFontSize * 2 + theme.sizes.tsLineHeight) / 2 -
      (theme.sizes.stepSize * 4) / 2}px;
      right: ${(theme.sizes.tsFontSize * 4) / 2 -
      (theme.sizes.stepSize * 4) / 2}px;

      ${theme.name === 'light' &&
      css`
        background-image: url(${selectArrowDownDarkIconSource});
      `}
      ${theme.name === 'dark' &&
      css`
        background-image: url(${selectArrowDownLightIconSource});
      `}
      
      background-repeat: no-repeat;
      background-position: center center;
      background-size: ${theme.sizes.stepSize * 3}px
        ${theme.sizes.stepSize * 3}px;
      transform-origin: center center;
      transform: ${active ? 'rotate(180deg)' : 'rotate(0)'};
      transition: all 0.2s ease-in-out;
    }
  `}
`

export default SelectFieldStyled
