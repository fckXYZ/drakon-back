// @ts-ignore
import React from 'react'
import {Box, Label} from '@admin-bro/design-system'

const Tracklist = (props) => {
	const { record } = props
	const { params } = record

	const tracksNames = []
	Object.keys(params).map((key) => {
		if (key.includes(`.name`)) {
			tracksNames.push(params[key])
		}
	})
	console.log(tracksNames)

	const renderTracks = () => {
		return(
			<ol style={{ listStyleType: 'decimal', marginBottom: '20px' }}>
				{
					!tracksNames.length ? null :
						tracksNames.map((name) => {
							return(
								<li>{name}</li>
							)
						})
				}
			</ol>
		)
	}

	return (
		<Box>
			<Label marginBottom="10px">Track List</Label>
			{renderTracks()}
		</Box>
	)
}

export default Tracklist
