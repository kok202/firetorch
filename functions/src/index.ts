import express from 'express';
import cors from 'cors';
import { runWith } from 'firebase-functions';
import * as ErrorController from './controller/ErrorController';
import * as SampleController from './controller/SampleController';
import * as UserController from './controller/UserController';
import upperMessageListener from './trigger/UpperMessage';
import CONSTANTS from 'src/utils/constants';

const application = express();
application.use(cors({ origin: true }));
application.use(express.json());
application.use(express.urlencoded({ extended: true }));
application.use(SampleController.getHelloWorldHandler);
application.use(UserController.postUserHandler);
application.use(UserController.getUserMeHandler);
application.use(UserController.putUserMeHandler);
application.use(UserController.getUserByNicknameHandler);
application.use(ErrorController.errorHandler);

export const api = runWith({
	timeoutSeconds: CONSTANTS.FUNCTIONS_MAX_TIMEOUT_SECONDS,
	memory: CONSTANTS.FUNCTIONS_MAX_MEMORY,
}).https.onRequest(application);

export const upperMessageTrigger = upperMessageListener;
