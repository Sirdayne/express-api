let mongoose = require('mongoose')

let articleSchema = mongoose.Schema({
	title:{
		type: string,
		required: true
	},
	body:{
		type: string,
		required: true
	},
	author:{
		type: string,
		required: true
	},
})

let Article = module.exports = mongoose.model('Article', articleSchema)