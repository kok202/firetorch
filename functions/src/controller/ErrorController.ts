import express from 'express';
import HttpStatusCode from 'src/utils/HttpStatusCode';
import RuntimeError from 'src/error/RuntimeError';

export const errorHandler = (
	error: Error,
	request: express.Request,
	response: express.Response,
	next: any,
) => {
	const runtimeError: RuntimeError = error as RuntimeError;
	response.status(runtimeError.statusCode || HttpStatusCode.INTERNAL_SERVER_ERROR).json({
		status: 'error',
		statusCode: runtimeError.statusCode || HttpStatusCode.INTERNAL_SERVER_ERROR,
		message: runtimeError.message,
		errors: runtimeError.errors,
	});
};
