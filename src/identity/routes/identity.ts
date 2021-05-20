import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';

import { User } from '../models/user';
import * as usersController from '../controllers';
import asyncHandler from 'express-async-error-handler';

const path = 'identity';

export function getIdneityRoutes (router : Router) : Router {
  router.post(`/${path}/user`, makeValidateBody(User), asyncHandler(usersController.postUserAsync));

  return router;
};
