// @ts-ignore
import React, {useState, useEffect}  from 'react'
import {Box, Label, Input, Button} from '@admin-bro/design-system'



const Tracklist = (props) => {
	const { record, onChange } = props
	const { params } = record
	const [tracksToRename, setTracksToRename] = useState({});

	console.log(params)
	const tracksNames = []
	Object.keys(params).map((key) => {
		if (key.includes(`tracksForFront`) && key.includes('.name')) {
			tracksNames.push({
				recKey: key,
				trackName: params[key]
			})
		}
	})

	useEffect(() => {
		const keys = Object.keys(tracksToRename)
		if (keys.length) {
			keys.map((key) => {
				if (!tracksToRename[key]) {
					delete tracksToRename[key]
				}
			})
			onChange('tracksToRename', tracksToRename)
		}
	}, [tracksToRename]);


	const editTrackName = (e, trackName) => {
		e.preventDefault()
		setTracksToRename({
			...tracksToRename,
			[trackName]: e.target.value
		})
	}

	const renderTracksInputs = () => {
		return tracksNames.map((track) => {
			return (
				<div style={{
					width: '100%',
					minWidth: '50%',
					marginTop: '10px',
					paddingBottom: '10px',
					borderBottom: '1px solid black'

				}}>
					<Label>
						{tracksNames.indexOf(track) + 1}.
						Имя трека на данный момент: <span style={{ fontSize: '14px', fontWeight: 600 }}>{track.trackName}</span>
					</Label>
					<Input
						placeholder='Для смены имени трека введите новое имя здесь'
						style={{
							minWidth: '450px',
							marginRight: '20px'
						}}
						onChange={(e) => editTrackName(e, track.trackName)}
					/>
				</div>
			)
		})
	}

	return (
		<Box>
			<h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Имена треков</h2>
			<p style={{ fontSize: '16px' }}>Для того, чтобы изменить имя трека, введите его в input под его настоящим именем</p>
			{
				tracksNames.length ?
					renderTracksInputs()
					: null
			}
		</Box>
	)
}

export default Tracklist
