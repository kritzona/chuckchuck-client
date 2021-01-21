import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  checked?: boolean
}

const ToggleStyled = styled.div<IProps>`
  ${({ theme, checked }) => css`
    width: ${theme.sizes.stepSize * 5}px;
    height: ${theme.sizes.stepSize * 2.5}px;
    border: 2px solid ${theme.colors.textColor};
    box-sizing: border-box;
    border-radius: ${theme.sizes.borderRadius * 3}px;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    ${!checked &&
    css`
      background-color: ${theme.colors.backgroundMiddleColor};
    `}

    &::after {
      content: '';
      width: ${theme.sizes.stepSize * 2.5}px;
      height: ${theme.sizes.stepSize * 2.5}px;
      background-color: ${theme.colors.backgroundMiddleColor};
      border: 2px solid ${theme.colors.textColor};
      box-sizing: border-box;
      border-radius: 50%;
      position: absolute;
      top: -2px;
      left: -2px;
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      &::after {
        background-color: ${theme.colors.textColor};
      }
    }

    ${checked &&
    css`
      background-color: ${theme.colors.textColor};

      &::after {
        left: calc(100% - 18px);
      }

      &:hover {
        &::after {
          background-color: ${theme.colors.backgroundMiddleColor};
        }
      }
    `}
  `}
`

export default ToggleStyled
