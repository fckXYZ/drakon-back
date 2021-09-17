import React from 'react'
import { Box } from '@admin-bro/design-system'
import { BasePropertyProps } from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props) => {
  const { record } = props

  const icon = record.params['icon']
  console.log(icon)
  return (
    <Box>
      {icon ? (
        <i className={icon}></i>
      ) : 'No image'}
    </Box>
  )
}

export default Edit