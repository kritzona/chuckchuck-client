import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import TemplateSettings from '../templates/TemplateSettings/TemplateSettings'

interface IProps {}

const TemplateSettingsContainer = (props: IProps) => {
  const user = useSelector((state: RootState) => state.user)

  return <React.Fragment>{user.isAuth && <TemplateSettings />}</React.Fragment>
}

export default TemplateSettingsContainer
