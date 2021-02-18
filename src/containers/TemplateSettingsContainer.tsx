import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import TemplateSettings from '../templates/TemplateSettings/TemplateSettings'

interface IProps {}

const TemplateSettingsContainer = (props: IProps) => {
  const history = useHistory()
  const user = useSelector((state: RootState) => state.user)

  return <React.Fragment>{user.isAuth && <TemplateSettings />}</React.Fragment>
}

export default TemplateSettingsContainer
