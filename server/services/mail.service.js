const mailjet = require ('node-mailjet')
	.connect('055111a242971a1732c8437c30e3588e', '0f3377f1fc8bc4c6c94ba7e214fd501e')
const request = mailjet
	.post("send", {'version': 'v3.1'})
	.request({
		"Messages":[
			{
				"From": {
					"Email": "drakon.band@yandex.ru",
					"Name": "drakon"
				},
				"To": [
					{
						"Email": "drakon.band@yandex.ru",
						"Name": "drakon"
					}
				],
				"Subject": "Greetings from Mailjet.",
				"TextPart": "My first Mailjet email",
				"HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
				"CustomID": "AppGettingStartedTest"
			}
		]
	})
request
	.then((result) => {
		console.log(result.body)
	})
	.catch((err) => {
		console.log(err.statusCode)
	})
