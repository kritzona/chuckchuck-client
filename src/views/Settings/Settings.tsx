import React from 'react'
import TemplateSettingsContainer from '../../containers/TemplateSettingsContainer'
import './Settings.scss'

interface IProps {}

const Settings = (props: IProps) => {
  return (
    <div className="settings">
      <TemplateSettingsContainer />
    </div>
  )
}

export default Settings
