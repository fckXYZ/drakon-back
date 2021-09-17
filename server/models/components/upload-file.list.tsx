// @ts-ignore
import React from 'react'
import { Box } from '@admin-bro/design-system'
import { BasePropertyProps } from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props) => {
  const { record } = props

  const fileSrc = record.params['file']
  console.log(fileSrc)
  return (
    <Box>
      {fileSrc ? (
        <img src={fileSrc} width="80px"/>
      ) : 'No file'}
    </Box>
  )
}

export default Edit
