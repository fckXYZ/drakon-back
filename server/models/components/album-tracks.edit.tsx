// @ts-ignore
import React from 'react'
import { Box } from '@admin-bro/design-system'
import { BasePropertyProps } from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props) => {
    const { record } = props
    let tracksForRender = []
    Object.keys(record.params).map((param) => {
        if (param.includes('track') && param.includes('name')) {
            tracksForRender.push(record.params[param])
        }
    })
    console.log(tracksForRender)
    const tracks = tracksForRender
    return (
        <Box>
            {tracks ? (
                tracks.map((track) => {
                    return <p>{track}</p>
                })
            ) : 'No files'}
        </Box>
    )
}

export default Edit
