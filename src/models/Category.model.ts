const { Schema, model } = require('mongoose')

const CategorySchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },
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

const Category = model('Category', CategorySchema)
module.exports = Category
