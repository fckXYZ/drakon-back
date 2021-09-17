// @ts-ignore
import React from 'react'
import { Box, Label, RichText, DefaultQuillToolbarOptions } from '@admin-bro/design-system'
import { BasePropertyProps } from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props) => {
  const [value, setValue] = React.useState("Welcome")
  const {property} = props
  return (
    <Box pb="x3">
      <Label>{property.label}</Label>
      <RichText
        quill={{
          theme: 'snow',
          modules: {
            toolbar: DefaultQuillToolbarOptions,
          }
        }}
        onChange={ setValue }
      />
    </Box>

  )
}

export default Edit
