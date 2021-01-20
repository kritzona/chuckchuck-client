import styled, { DefaultTheme } from 'styled-components'
import checkLightIconSource from '../../../assets/icons/check-light.svg'

interface IProps {
  theme: DefaultTheme
  checked?: boolean
}

const CheckboxStyled = styled.div<IProps>`
  width: ${({ theme }) => theme.sizes.stepSize * 2.5}px;
  height: ${({ theme }) => theme.sizes.stepSize * 2.5}px;
  background: ${(props) =>
    props.checked
      ? props.theme.colors.textColor
      : props.theme.colors.backgroundColor};
  border: 2px solid ${({ theme }) => theme.colors.textColor};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.sizes.borderRadius}px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;

  &::after {
    content: '';
    width: ${({ theme }) => theme.sizes.stepSize + 2}px;
    height: ${({ theme }) => theme.sizes.stepSize + 2}px;
    top: calc(50% - 5px);
    left: calc(50% - 5px);
    background-image: ${(props) =>
      props.checked ? `url(${checkLightIconSource})` : 'none'};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    border-radius: 50%;
    position: absolute;
    display: ${(props) => (props.checked ? 'block' : 'none')};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.textColor};
  }

  &:hover {
    opacity: 0.5;
  }
`

export default CheckboxStyled
