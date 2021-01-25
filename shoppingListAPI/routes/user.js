const express = require('express')
const router = express.Router()


// @desc   
// @route   GET /
router.get('/',async (req,res) =>{
	try{
        res.send("OLA MUNDO")
	}catch(err){
		console.log(err)
	}
})


module.exports = router
