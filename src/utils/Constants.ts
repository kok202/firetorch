class CONSTANTS {
	static readonly API_ROOT = process.env.REACT_APP_API_ROOT;
	static readonly DATABASE_URL = process.env.REACT_APP_DATABASE_URL;
	static readonly CLOUD_BUCKET = process.env.REACT_APP_CLOUD_BUCKET;
	static readonly EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	static readonly MIN_NICKNAME_LENGTH = 4;
	static readonly MAX_NICKNAME_LENGTH = 16;
	static readonly MIN_PASSWORD_LENGTH = 6;

	static readonly URL_ROOT = '/';
	static readonly URL_HOME = '/home';
	static readonly URL_ABOUT = '/about';
	static readonly URL_COUNTER = '/counter';
	static readonly URL_USER = '/user';
	static readonly URL_USER_ME = '/user/me';
	static readonly URL_USER_LOGIN = '/user/login';
	static readonly URL_USER_REGIST = '/user/regist';
	static readonly URL_USER_SIGNUP = '/user/signup';
	static readonly URL_USER_MODIFY = '/user/modify';
	static readonly URL_USER_INFO = '/user/:nickname';
}

export default CONSTANTS;
