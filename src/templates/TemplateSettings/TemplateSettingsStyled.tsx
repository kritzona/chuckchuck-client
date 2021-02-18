import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const TemplateSettingsStyled = styled.div<IProps>`
  ${() => css`
    position: relative;
    min-height: 100%;
    padding-bottom: 47px;
  `}
`
export const TemplateSettingsHeaderStyled = styled.div<IProps>`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`
export const TemplateSettingsContentStyled = styled.div<IProps>`
  ${() => css``}
`
export const TemplateSettingsFooterStyled = styled.div<IProps>`
  ${() => css`
    width: 100%;
    position: absolute;
    top: calc(100% - 47px);
    left: 0;
  `}
`
