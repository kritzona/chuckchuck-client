import React from 'react'

import './Radio.scss'

interface IProps {
  checked?: boolean
}

const Radio = (props: IProps) => {
  const radioClassNames = ['radio']
  if (props.checked) {
    radioClassNames.push('radio--checked')
  }

  return <div className={radioClassNames.join(' ')}></div>
}

export default Radio
