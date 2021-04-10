const Joi = require('joi');

module.exports = {
    registerValidation: function (data) {
        console.log('asd')
        const UserRegisterSchema  = Joi.object( {
            username:Joi.string().required(),
            email: Joi.string().email({ tlds: { allow: false } }).required(),
            password:Joi.string().min(6).required()
        })

        return UserRegisterSchema.validate(data);
        //console.log(error)
        
    },
    loginValidation:function(data) {
        const UserLogInSchema  = Joi.object( {
            username:Joi.string().required(),
            password:Joi.string().min(6).required()
        })
        return UserLogInSchema.validate(data);
    }
}