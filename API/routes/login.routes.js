import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import { limiterLogin } from "../config/rateLimit.js";
import { loginV1 } from "../version/v1/login.js";
import { validateDTOLogin } from "../DTO/loginDTO.js";
import validateCredentialsUser from "../middlewares/validateCredentials.js";
const router = Router();
const version = routesVersioning()

router.use(limiterLogin())

router.post('/', validateDTOLogin, validateCredentialsUser, version({
    "1.0.0": loginV1
}))


export default router;