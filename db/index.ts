import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
	throw new Error('MONGO_URI is not defined in the environment')
}

mongoose
	.connect(MONGO_URI)
	.then((x) => {
		const dbName = x.connections[0].name
		console.log(`✅ Connected to Mongo! Database name: "${dbName}"`)
	})
	.catch((err) => {
		console.error('❌ MongoDB connection error:', err)
	})
