//VALIDATION
const Joi = require("@hapi/joi");

const registerValidation = (data) => {

    const schema = Joi.object({
        username: Joi.string().min(6).max(20).required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required(),
    });

    return schema.validateAsync(data);
};

const loginValidation = (data) => {
    
    const schema = Joi.object({
        username: Joi.string().min(6).max(20).required(),
        password: Joi.string().min(6).max(1024).required(),
    });
    
    return schema.validateAsync(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
