import { Schema, model, Document, Types, Model } from 'mongoose'

interface ITask extends Document {
	user: Types.ObjectId
	parent: Types.ObjectId
	title: string
	description?: string
	isChecked: boolean
}

const TaskSchema = new Schema<ITask>(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		parent: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
		title: { type: String, trim: true, required: true },
		description: { type: String },
		isChecked: { type: Boolean, default: false },
	},
	{ timestamps: true }
)

const Task: Model<ITask> = model<ITask>('Task', TaskSchema)
export default Task
