const mongoose = require('mongoose');

const schema = mongoose.Schema({
	contract_address: String,
	name: String,
	slug: String,
	totalSupply: Number
})

const Collections = mongoose.model("Collections", schema)

export default Collections