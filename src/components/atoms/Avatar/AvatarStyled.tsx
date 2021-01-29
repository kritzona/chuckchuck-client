import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  imageSource: string | null
}

const AvatarStyled = styled.div<IProps>`
  ${({ theme, imageSource }) => css`
    width: ${theme.sizes.tsFontSize +
    theme.sizes.tsLineHeight +
    theme.sizes.tsFontSize}px;
    height: ${theme.sizes.tsFontSize +
    theme.sizes.tsLineHeight +
    theme.sizes.tsFontSize}px;
    background-color: ${theme.colors.compColor};
    ${imageSource &&
    css`
      background-image: url(${imageSource});
    `}

    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.5);
    }
  `}
`

export default AvatarStyled
