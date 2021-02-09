import React from 'react'
import PreloaderStyled from './PreloaderStyled'
import PreloaderSpinner from '../../atoms/PreloaderSpinner/PreloaderSpinner'

interface IProps {}

const Preloader = (props: IProps) => {
  return (
    <PreloaderStyled>
      <PreloaderSpinner />
    </PreloaderStyled>
  )
}

export default Preloader
