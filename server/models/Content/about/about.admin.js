const AdminBro = require('admin-bro');
const About = require('./about.model');

const options = {
	parent: {
		name: 'Content',
	},
	properties: {
		_id: {
			isVisible: false,
		},
		main_page: {
			type: 'richtext',
			isVisible: {
				show: true,
				edit: true,
				filter: false,
				list: false
			},
		},
		about_page: {
			type: 'richtext',
			isVisible: {
				show: true,
				edit: true,
				filter: false,
				list: false
			},
		},
	},
};

module.exports = {
	options,
	resource: About,
};
