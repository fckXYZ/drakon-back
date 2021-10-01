// @ts-ignore
import React from 'react'
import { Box, Label, DatePicker } from '@admin-bro/design-system'

const Datepicker = (props) => {
	const [value, setValue] = React.useState(new Date())
	const {property, record} = props;
	const { custom } = property
	return (
		<Box pb="x3">
			<Label>День рождения</Label>
			<p style={{ marginBottom: '10px', fontSize: '10px' }}>{custom ? custom.text : ''}</p>
			<DatePicker
				value={value}
				onChange={ (date) => {
					setValue(date)
					record.params.birthday = date;
				} }
				showYearDropdown
				scrollableYearDropdown
				yearDropdownItemNumber={30}
				showTimeSelect={false}
				dateFormat="DD-MM-YYYY"
			/>
		</Box>

	)
}

export default Datepicker;
