const AdminBro = require('admin-bro');
const DiscographyText = require('./discographyText.model');

/**@type {AdminBro.ResourceOptions} */
const options = {
	parent: {
		name: 'Content',
	},
	properties: {
		_id: {
			isVisible: false,
		},
		text: {
			type: 'richtext',
			isVisible: {
				show: true,
				edit: true,
				filter: false,
				list: false
			}
		}
	}
};

module.exports = {
	options,
	resource: DiscographyText,
};
