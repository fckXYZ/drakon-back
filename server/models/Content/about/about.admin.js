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
		videoReqs: {
			components: {
				edit: AdminBro.bundle('../../components/text-reqs.jsx'),
				show: AdminBro.bundle('../../components/text-reqs.jsx'),
			},
			isVisible: {
				show: false,
				edit: true,
				filter: false,
				list: false,
			},
			custom: {
				title: 'Требования к ссылке на видео',
				text: 'Чтобы видео работало, ссылка должна быть вида https://youtube.com/embed/kMZLPOgVkZM. Внимание на youtube.com ! И на /embed/ !'
			},
			position: 7,
		},
	},
};

module.exports = {
	options,
	resource: About,
};
