import { Schema, model, Document, Types, Model } from 'mongoose'

interface ISession extends Document {
	user: Types.ObjectId
	parent: Types.ObjectId
	dtStart: Date
	dtEnd: Date
}

const SessionSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
		parent: { type: Schema.Types.ObjectId, ref: 'task', required: true },
		dtStart: { type: Date, required: true },
		dtEnd: { type: Date, required: true },
	},
	{ timestamps: true }
)

SessionSchema.index({ user: 1, dtStart: 1, dtEnd: 1 })

const Session: Model<ISession> = model<ISession>('Session', SessionSchema)
export default Session
