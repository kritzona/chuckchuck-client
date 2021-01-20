import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  placeholder?: string
}

const InputTextareaElementStyled = styled.textarea.attrs<IProps>((props) => ({
  placeholder: props.placeholder ? props.placeholder : 'Введите значение',
}))`
  ${({ theme }) => css`
    display: block;
    appearance: none;
    width: 100%;
    height: ${theme.sizes.tsLineHeight * 4}px;
    min-height: ${theme.sizes.tsLineHeight * 4}px;
    max-height: ${theme.sizes.tsLineHeight * 4}px;
    border: 0;
    font-style: normal;
    font-weight: ${theme.sizes.boldFontWeight};
    font-size: ${theme.sizes.tsFontSize}px;
    line-height: ${theme.sizes.tsLineHeight}px;
    outline: none;
    margin: 0;
    padding: ${theme.sizes.tsFontSize}px ${theme.sizes.tsFontSize * 2}px;
    color: ${theme.colors.textColor};
    letter-spacing: -0.5px;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${theme.colors.greyColor};
    }
  `}
`

export default InputTextareaElementStyled
