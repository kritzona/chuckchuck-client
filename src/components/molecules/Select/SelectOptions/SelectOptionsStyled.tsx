import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const SelectOptionsStyled = styled.div<IProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundMiddleColor};
    padding: ${theme.sizes.tsFontSize}px ${theme.sizes.tsFontSize * 2}px;
    box-shadow: ${theme.effects.boxShadow};
    border-radius: ${theme.sizes.borderRadius}px;
    border: 2px solid ${theme.colors.backgroundMiddleColor};

    & > *:not(:first-child) {
      margin-top: ${theme.sizes.stepSize}px;
    }
  `}
`

export default SelectOptionsStyled
