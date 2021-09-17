import React from 'react'
import { Box, Text } from '@admin-bro/design-system'

const Reqs = (props) => {
    const { property } = props
    return (
        <Box>
            <span>Требования к ссылке на видео</span>
            <Text>
                {property.custom.text}
            </Text>
        </Box>
    )
}

export default Reqs
