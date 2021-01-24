import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  size?: 'normal' | 'small' | 'sub'
  weight?: 'regular' | 'bold'
}

export const TextH1Styled = styled.h1<IProps>`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: ${theme.sizes.boldFontWeight};
    font-size: ${theme.sizes.h1FontSize}px;
    line-height: ${theme.sizes.h1LineHeight}px;
    transform: translateX(-4px);
    margin: 0;
    margin-top: ${theme.sizes.stepSize * 2}px;
    margin-bottom: ${theme.sizes.stepSize * 2}px;
  `}
`
export const TextH2Styled = styled.h2<IProps>`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: ${theme.sizes.boldFontWeight};
    font-size: ${theme.sizes.h2FontSize}px;
    line-height: ${theme.sizes.h2LineHeight}px;
    transform: translateX(-4px);
    margin: 0;
    margin-top: ${theme.sizes.stepSize * 2}px;
    margin-bottom: ${theme.sizes.stepSize * 2}px;
  `}
`
export const TextH3Styled = styled.h3<IProps>`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: ${theme.sizes.boldFontWeight};
    font-size: ${theme.sizes.h3FontSize}px;
    line-height: ${theme.sizes.h3LineHeight}px;
    transform: translateX(-4px);
    margin: 0;
    margin-top: ${theme.sizes.stepSize * 2}px;
    margin-bottom: ${theme.sizes.stepSize * 2}px;
  `}
`
export const TextSpanStyled = styled.span<IProps>`
  ${({ theme, size, weight }) => css`
    font-style: normal;

    ${(!size || size === 'normal') &&
    css`
      font-size: ${theme.sizes.tnFontSize}px;
      line-height: ${theme.sizes.tnLineHeight}px;
    `}
    ${size === 'small' &&
    css`
      font-size: ${theme.sizes.tsFontSize}px;
      line-height: ${theme.sizes.tsLineHeight}px;
    `}
    ${size === 'sub' &&
    css`
      font-size: ${theme.sizes.tsubFontSize}px;
      line-height: ${theme.sizes.tsubLineHeight}px;
    `}
    
    ${(!weight || weight === 'regular') &&
    css`
      font-weight: ${theme.sizes.regularFontWeight};
    `}
    ${weight === 'bold' &&
    css`
      font-weight: ${theme.sizes.boldFontWeight};
    `}
  `}
`
