// @ts-ignore
import React from 'react'
import {Box, Label} from '@admin-bro/design-system'

const CoverPreview = (props) => {
	const { record } = props
	const { params } = record

	const coverUrl = `/uploads/${params._id}/${params['cover.filename']}`;

	return (
		<Box>
			<img src={coverUrl} width="80px" style={{ marginBottom: "15px" }}/>
		</Box>
	)
}

export default CoverPreview
