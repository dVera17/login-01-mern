import { check } from "express-validator";

export const validateDTOLogin = [
    check('username').notEmpty().isString().withMessage('username is required, is a string'),
    check('password').notEmpty().isString().withMessage('password is required, is a string')
]