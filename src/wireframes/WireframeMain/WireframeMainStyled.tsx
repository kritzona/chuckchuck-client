import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const WireframeMainStyled = styled.div<IProps>`
  height: calc(var(--vh, 1vh) * 100);
`
export const WireframeMainHeaderStyled = styled.header<IProps>``
export const WireframeMainContentStyled = styled.main<IProps>``
export const WireframeMainFooterStyled = styled.footer<IProps>``
