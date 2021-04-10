const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {registerValidation,loginValidation} = require('../helpers/validator');
var jwt = require('jsonwebtoken');

/**
 * @swagger
 * /:
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

/**
 * @swagger
 * /login:
 *  post:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
 router.post('/login',async (req,res) =>{
	try{
        const {username,password} = req.body

        let user = await User.findOne({username:username}).exec();

		const {error} = loginValidation(req.body);

        let response = {
            sucess:false,
            message:''
        }

        if(error){
            response.message = error.details.map(e => e.message).join('\n')

            res.send(response)
            return 
        }

        if(!user){
            response.message = `Email not Found`

            res.send(response)
            return 
        }

        if (!bcrypt.compareSync(password, user.password)) {
            response.message = `invalid password`

            res.send(response)
            return 
        }

        //jwt
        var token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);
        response = {
            sucess:true,
            message:'Login successfully',
            token:token
        }
        
        res.send(response)
	}catch(err){
		console.log(err)
	}
})
/**
 * @swagger
 * /register:
 *  post:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
 router.post('/register',async (req,res) =>{
	try{
        const {username,password, email} = req.body

        let user = await User.findOne({username:username}).exec();

		const {error} = registerValidation(req.body);

        let response = {
            sucess:false,
            message:''
        }

        if(error){
            response.message = error.details.map(e => e.message).join('\n')

            res.send(response)
            return 
        }

        if(user){
            response.message = `Username already exist`

            res.send(response)
            return 
        }

        user = await User.findOne({email:email}).exec();

        if(user){
            response.message = `Email already exist`

            res.send(response)
            return 
        }

        bcrypt.hash(password, saltRounds, async function (err,   hash) {
            const userToCreate = {
                username:username,
                password:hash,
                email:email
            }
            await User.create(userToCreate)
            response = {
                sucess:true,
                message:'register successfully',
            }
    
            res.send(response)
        });

	}catch(err){
		console.log(err)
	}
})


module.exports = router
