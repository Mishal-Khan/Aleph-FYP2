const mongoose = require('mongoose')

const recording1Schema = new mongoose.Schema({
	id : String,
	name : String,
 recording : String

})


mongoose.model("recordingcheck", recording1Schema)