import styled, { css, DefaultTheme } from 'styled-components'
import avatarImageSource from '../../../assets/images/avatar.png'

interface IProps {
  theme: DefaultTheme
}

const AvatarStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: ${theme.sizes.tnFontSize +
    theme.sizes.tnLineHeight +
    theme.sizes.tnFontSize}px;
    height: ${theme.sizes.tnFontSize +
    theme.sizes.tnLineHeight +
    theme.sizes.tnFontSize}px;
    background-color: ${theme.colors.compColor};
    background-image: url(${avatarImageSource});
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
