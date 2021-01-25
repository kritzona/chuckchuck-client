import React from 'react'
import './Messenger.scss'
import TemplateMessengerContainer from '../../containers/TemplateMessengerContainer'

interface IProps {}

const Messenger = (props: IProps) => {
  return (
    <div className="messenger">
      <TemplateMessengerContainer />
    </div>
  )
}

export default Messenger
