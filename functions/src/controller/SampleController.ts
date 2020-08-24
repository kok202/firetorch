import express from 'express';
import HttpStatusCode from 'src/utils/HttpStatusCode';
import handlerWrapper from 'src/utils/HandlerWrapper';

export const getHelloWorldHandler = express.Router().get(
	'/hello',
	handlerWrapper(async (request: express.Request, response: express.Response) => {
		response.status(HttpStatusCode.OK).send({ data: 'hello world' });
	}),
);
