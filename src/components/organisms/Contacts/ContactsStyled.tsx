import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const ContactsStyled = styled.div.attrs((props: IProps) => ({
  className: 'row',
}))`
  ${() => css``}
`
export const ContactsItemStyled = styled.div.attrs((props: IProps) => ({
  className: 'col-lg-3 mb-4',
}))`
  ${() => css``}
`
