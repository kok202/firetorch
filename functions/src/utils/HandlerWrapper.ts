import express from 'express';

const handlerWrapper = (asyncFunction: any) => {
	return async (
		request: express.Request,
		response: express.Response,
		next: express.NextFunction,
	) => {
		try {
			return await asyncFunction(request, response, next);
		} catch (error) {
			return next(error);
		}
	};
};

export default handlerWrapper;
