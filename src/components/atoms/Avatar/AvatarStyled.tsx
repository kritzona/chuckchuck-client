import styled, { DefaultTheme } from 'styled-components'
import avatarImageSource from '../../../assets/images/avatar.png'

interface IProps {
  theme: DefaultTheme
}

const AvatarStyled = styled.div<IProps>`
  width: ${({
    theme: {
      sizes: { tnFontSize, tnLineHeight },
    },
  }) => tnFontSize + tnLineHeight + tnFontSize}px;
  height: ${({
    theme: {
      sizes: { tnFontSize, tnLineHeight },
    },
  }) => tnFontSize + tnLineHeight + tnFontSize}px;
  background-color: ${({
    theme: {
      colors: { compColor },
    },
  }) => compColor};
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
`

export default AvatarStyled
