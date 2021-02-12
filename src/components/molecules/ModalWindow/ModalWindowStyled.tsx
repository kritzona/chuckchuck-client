import styled, { css, DefaultTheme } from 'styled-components'
import { rgba } from 'polished'

interface IProps {
  theme: DefaultTheme
}

export const ModalWindowStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background-color: ${rgba(theme.colors.backgroundColor, 0.8)};
    z-index: 1000000;
    backdrop-filter: blur(5px);
  `}
`
export const ModalWindowHeaderStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: ${theme.sizes.stepSize}px 0;
    box-sizing: border-box;
  `}
`
