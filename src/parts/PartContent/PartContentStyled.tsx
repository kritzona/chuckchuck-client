import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const PartContentStyled = styled.div<IProps>`
  ${({ theme }) => css`
    padding-top: ${theme.sizes.stepSize * 8}px;
    padding-bottom: ${theme.sizes.stepSize * 8}px;
    box-sizing: border-box;

    @media (max-width: 767.98px) {
      padding-top: ${theme.sizes.stepSize * 2}px;
      padding-bottom: ${theme.sizes.stepSize * 2}px;
    }
  `}
`

export default PartContentStyled
