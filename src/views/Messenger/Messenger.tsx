import React from 'react'
import TemplateMessenger from '../../templates/TemplateMessenger/TemplateMessenger'
import './Messenger.scss'

interface IProps {
  theme: string
  onToggleTheme?: () => void
}

const Messenger = (props: IProps) => {
  const handleToggleTheme = () => {
    if (props.onToggleTheme) {
      props.onToggleTheme()
    }
  }

  return (
    <div className="messenger">
      <TemplateMessenger
        theme={props.theme}
        onToggleTheme={() => handleToggleTheme()}
      />
    </div>
  )
}

export default Messenger
