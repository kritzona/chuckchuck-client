import styled, { DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const WireframeMainStyled = styled.div<IProps>`
  height: calc(var(--vh, 1vh) * 100);
`
export const WireframeMainHeaderStyled = styled.header<IProps>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`
export const WireframeMainContentStyled = styled.main<IProps>`
  height: 100%;
  max-height: 100%;
  padding-top: 0;
  box-sizing: border-box;
  overflow-y: auto;
`
export const WireframeMainFooterStyled = styled.footer<IProps>``
