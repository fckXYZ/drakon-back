const { Schema, model } = require('mongoose')

const SettingsSchema = new Schema({
	maintain: {
		type: Boolean,
		default: false,
	},
	videosVisible: {
		type: Boolean,
		default: true,
	},
	photosVisible: {
		type: Boolean,
		default: true
	},
})

const Settings = model('Settings', SettingsSchema)

module.exports = { SettingsSchema, Settings}
