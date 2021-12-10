const { Router } = require('express')
const mailjet = require ('node-mailjet')
	.connect('055111a242971a1732c8437c30e3588e', '0f3377f1fc8bc4c6c94ba7e214fd501e')

const router = new Router()

// Send E-Mail
router.post('/', async (req, res) => {
	const { email } = req.body;
	const request = mailjet
		.post("send", {'version': 'v3.1'})
		.request({
			"Messages":[
				{
					"From": {
						"Email": 'drakon.band@yandex.ru',
						"Name": 'drakon.band'
					},
					"To": [
						{
							"Email": "info@drakon.band",
							"Name": "drakon"
						}
					],
					"Subject": "Feedback",
					"HTMLPart": `<h2>Новая подписка:</h2></h2><h3>E-Mail: ${email}</h3>`,
				}
			]
		})
	request
		.then(() => {
				res.send({ message: 'Спасибо! Ваше письмо отправлено!' })
		})
		.catch(() => {
			res.status(500).send({ message: 'Произошла ошибка на сервере. Пожалуйста, попробуйте снова позже.' })
		})


})

module.exports = router;
