const { Schema, model } = require('mongoose')

const ContactsSchema = new Schema({
	phone: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true
	},
	mediaLinks: [
		{
			type: {
				type: String,
				required: true,
				enum: [
					'spotify',
					'yandex',
					'youtube',
					'apple'
				]
			},
			link: {
				type: String,
				required: true
			}

		}
	]
})

const Contacts = model('Contacts', ContactsSchema)

module.exports = { ContactsSchema, Contacts}
