import React from 'react'

import './Checkbox.scss'

interface IProps {
  checked?: boolean
}

const Checkbox = (props: IProps) => {
  const checkboxClassNames = ['checkbox']
  if (props.checked) {
    checkboxClassNames.push('checkbox--checked')
  }

  return <div className={checkboxClassNames.join(' ')}></div>
}

export default Checkbox
