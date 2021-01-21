import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  checked?: boolean
}

const RadioStyled = styled.div<IProps>`
  ${({ theme, checked }) => css`
    width: ${theme.sizes.stepSize * 2.5}px;
    height: ${theme.sizes.stepSize * 2.5}px;
    background: ${checked
      ? theme.colors.textColor
      : theme.colors.backgroundMiddleColor};
    border: 2px solid ${theme.colors.textColor};
    box-sizing: border-box;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease-in-out;

    &::after {
      content: '';
      width: ${theme.sizes.stepSize - 2}px;
      height: ${theme.sizes.stepSize - 2}px;
      top: calc(50% - 3px);
      left: calc(50% - 3px);
      background: ${theme.colors.whiteColor};
      border-radius: 50%;
      position: absolute;
      display: ${checked ? 'block' : 'none'};
    }

    &:hover {
      background: ${theme.colors.textColor};
      opacity: 0.5;

      &::after {
        display: block;
        background: ${theme.colors.backgroundColor};
      }
    }
  `}
`

export default RadioStyled
