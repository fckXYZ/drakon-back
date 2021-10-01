// @ts-ignore
import React from 'react'
import { Label, Box, DropZone } from '@admin-bro/design-system'
import { BasePropertyProps } from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props) => {
  try {
    const {property, record, onChange} = props
    const { custom } = property;

    const handleDropZoneChange = (files) => {
      onChange(property.name, files[0])
    }
    return (
      <Box pb="x3">
        <Label>{Object.keys(custom).length ?
            custom.title ? custom.title : property.label : property.label}</Label>
        {
          Object.keys(custom).length ?
                  <p
                      style={{ marginBottom: '10px', fontSize: '10px' }}
                  >{custom.text}</p>
            : null
        }
        <DropZone
          multiple
          onChange={handleDropZoneChange} />
      </Box>
    )
  } catch (error) {
    console.log('edit error')
    console.log(error)
  }

}

export default Edit
