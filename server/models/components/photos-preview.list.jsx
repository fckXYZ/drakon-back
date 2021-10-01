// @ts-ignore
import React from 'react'
import { Box } from '@admin-bro/design-system'
import { BasePropertyProps } from 'admin-bro'

const PhotosPreview = (props) => {
	const { record, property } = props

	const photosUrls = [];
	const propName = property.custom.propName;
	console.log(record.params)
	Object.keys(record.params).map((key) => {
		if (key.includes(`${propName}.key`)) {
			photosUrls.push('/uploads/' + record.params[key])
		}
	})

	const renderPhotos = () => {
		return photosUrls.map((url) => {
			return(
				<img src={url} width="80px"/>
			)
		})
	}

	return (
		<Box>
			{photosUrls.length ? (
				renderPhotos()
			) : 'Нет файлов'}
		</Box>
	)
}

export default PhotosPreview
