import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const FooterStyled = styled.div.attrs((props: IProps) => ({
  className: 'row',
}))`
  ${() => css``}
`
export const FooterColumnStyled = styled.div.attrs((props: IProps) => ({
  className: 'col-lg-4',
}))`
  ${() => css``}
`
export const FooterCopyStyled = styled.div.attrs((props: IProps) => ({
  className: 'col-lg-12 text-center',
}))`
  ${() => css``}
`
