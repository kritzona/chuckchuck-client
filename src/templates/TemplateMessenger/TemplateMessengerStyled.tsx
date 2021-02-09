import styled, { css, DefaultTheme } from 'styled-components'
import summerUnderwaterImageSource from '../../assets/images/summer-underwater.jpg'

interface IProps {
  theme: DefaultTheme
}

export const TemplateMessengerStyled = styled.div<IProps>`
  height: 100%;
  position: relative;
`
export const TemplateMessengerBackgroundStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${theme.colors.backgroundMiddleColor};
    background-image: url(${summerUnderwaterImageSource});
    background-repeat: repeat;
    filter: opacity(0.2) blur(3px);
    position: absolute;
    z-index: -1;
  `}
`
export const TemplateMessengerHeaderStyled = styled.div<IProps>``
export const TemplateMessengerMessagesStyled = styled.div<IProps>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const TemplateMessengerMessagesWrapperStyled = styled.div<IProps>`
  height: auto;
  max-height: 100%;
  //overflow-y: auto;
`
export const TemplateMessengerSendboxStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  `}
`
export const TemplateMessengerMessagesContainerStyled = styled.div<IProps>``
