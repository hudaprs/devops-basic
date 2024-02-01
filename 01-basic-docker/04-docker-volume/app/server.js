const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./User')

const connect = async () => {
	try {
		await mongoose.connect(
			'mongodb://root:example@mongo:27017/docker-kubernetes',
			{
				authSource: 'admin'
			}
		)

		console.log('mongoose connected')
	} catch (error) {
		console.error('mongoose error', error)

		process.exit(1)
	}
}

const start = async () => {
	await connect()

	app.get('/create', async (req, res) => {
		const user = new User({ name: `Huda Prasetyo 1 - ${Math.random()}` })
		await user.save()

		res.status(201).json({ message: 'User Created' })
	})

	app.get('/', (req, res) => {
		res.json({
			message: 'Hello From Techworld with Nana!!!!!'
		})
	})

	app.listen(3000, () => console.log(`Server started at port 3000`))
}

start()
