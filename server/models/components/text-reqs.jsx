import React from 'react'
import { Box, Text } from '@admin-bro/design-system'

const Reqs = (props) => {
    const { property } = props
    return (
        <Box marginBottom="25px">
            <span>{property.custom.title ? property.custom.title : property.label}</span>
            <Text fontSize="10px">
                {property.custom.text}
            </Text>
        </Box>
    )
}

export default Reqs
