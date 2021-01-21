import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const SelectStyled = styled.div<IProps>`
  position: relative;
  z-index: 1;
`
export const SelectFieldWrapperStyled = styled.div<IProps>``
export const SelectOptionsWrapperStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
    top: calc(100% + ${theme.sizes.stepSize}px);
    left: 0;
    position: absolute;
    z-index: 1000;
  `}
`
