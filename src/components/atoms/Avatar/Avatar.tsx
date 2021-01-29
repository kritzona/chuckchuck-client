import React from 'react'
import AvatarStyled from './AvatarStyled'

interface IProps {
  imageSource: string | null
}

const Avatar = (props: IProps) => {
  return <AvatarStyled imageSource={props.imageSource} />
}

export default Avatar
