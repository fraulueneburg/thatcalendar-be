import { Schema, model, Document, Types, Model } from 'mongoose'

interface ICategory extends Document {
	user: Types.ObjectId
	parent?: Types.ObjectId | null
	title: string
	description?: string
	color?: string
	bgColor?: string
}

const CategorySchema = new Schema<ICategory>(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
		parent: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
		title: { type: String, trim: true, required: true },
		description: { type: String, trim: true },
		color: { type: String },
		bgColor: { type: String },
	},
	{
		timestamps: true,
	}
)

CategorySchema.index({ user: 1, parent: 1 })

CategorySchema.virtual('children', {
	ref: 'Category',
	localField: '_id',
	foreignField: 'parent',
})

const Category: Model<ICategory> = model<ICategory>('Category', CategorySchema)
export default Category
