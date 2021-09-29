// @ts-ignore
import React from 'react'
import { Box, Label, DatePicker } from '@admin-bro/design-system'

const Edit = (props) => {
	const [value, setValue] = React.useState(new Date())
	const {property} = props
	return (
		<Box pb="x3">
			<Label>{property.label}</Label>
			<DatePicker
				value={value}
				onChange={ (date) => setValue(date) }
				showYearDropdown
				scrollableYearDropdown
				yearDropdownItemNumber={30}
				showTimeSelect={false}
				dateFormat="DD-MM-YYYY"
			/>
		</Box>

	)
}

export default Edit;
