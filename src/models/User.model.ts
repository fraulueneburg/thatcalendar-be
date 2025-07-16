import { Schema, model, Document, Types, Model } from 'mongoose'

interface IUser extends Document {
	name: string
	email: string
	password: string
}

const UserSchema = new Schema<IUser>(
	{
		name: { type: String, trim: true, required: true },
		email: { type: String, unique: true, lowercase: true, trim: true, required: [true, 'Email is required.'] },
		password: { type: String, required: [true, 'Password is required.'] },
	},
	{
		timestamps: true,
	}
)

const User: Model<IUser> = model<IUser>('User', UserSchema)
export default User
