const { Schema, model } = require('mongoose')

const SettingsSchema = new Schema({
	maintenance: {
		type: Boolean,
		default: false,
		required: true
	},
	logo: {
		type: String,
		required: false
	},
	visibility: {
		magazines: {
			type: Boolean,
			default: true,
		},
	},
	buttonsUrl: {
		ru: {
			homePage: String,
			topUpWallet: String,
			login: String,
			signup: String,
			start: String,
			subscribe: String,
		},
		en: {
			homePage: String,
			topUpWallet: String,
			login: String,
			signup: String,
			start: String,
			subscribe: String,
		},
		sp: {
			homePage: String,
			topUpWallet: String,
			login: String,
			signup: String,
			start: String,
			subscribe: String,
		},
		fr: {
			homePage: String,
			topUpWallet: String,
			login: String,
			signup: String,
			start: String,
			subscribe: String,
		},
		id: {
			homePage: String,
			topUpWallet: String,
			login: String,
			signup: String,
			start: String,
			subscribe: String,
		},
	}
})

const Settings = model('Settings', SettingsSchema)

module.exports = { SettingsSchema, Settings}
