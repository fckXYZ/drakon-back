// @ts-ignore
import React from 'react'
import { Label, Box, DropZone } from '@admin-bro/design-system'
import { BasePropertyProps } from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props) => {
  try {
    const {property, record, onChange} = props
    const { custom } = property;
    console.log(props)

    const handleDropZoneChange = (files) => {
      console.log(files)
      onChange(property.name, files[0])
      console.log(files[0])
    }
    return (
      <Box pb="x3">
        <Label>{property.label}</Label>
        {
          Object.keys(custom).length ?
              Object.keys(custom).map((key) => (
                  <p
                      key={`subtitle-${key}`}
                      style={{ marginBottom: '15px' }}
                  >{custom[key]}</p>)
              ):
              null
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
