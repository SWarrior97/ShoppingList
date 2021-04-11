const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /shoppingList:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/',async (req,res) =>{
	try{
        res.send("OLA MUNDO")
	}catch(err){
		console.log(err)
	}
})


module.exports = router
