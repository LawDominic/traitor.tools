const mongoose = require('mongoose');

const schema = mongoose.Schema({
	contract_address: String,
	name: String,
	totalSupply: Number,
	maxSupply: Number
})

const Collection = mongoose.model("Collection", schema)

export default Collection