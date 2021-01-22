import React from 'react'
import TemplateMessenger from '../../templates/TemplateMessenger/TemplateMessenger'
import './Messenger.scss'

interface IProps {}

const Messenger = (props: IProps) => {
  return (
    <div className="messenger">
      <TemplateMessenger />
    </div>
  )
}

export default Messenger
