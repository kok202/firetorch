class CONSTANTS {
	static readonly MAX_PAGE_SIZE = 10;
	static readonly MIN_NICKNAME_LENGTH = 4;
	static readonly MAX_NICKNAME_LENGTH = 16;
	static readonly RESERVED_NICKNAME = ['info', 'me', 'regist', 'signup', 'modify'];

	static readonly FUNCTIONS_MAX_TIMEOUT_SECONDS = 540;
	static readonly FUNCTIONS_MAX_MEMORY = '2GB';
	static readonly COLLECTION_USER = 'users';
}

export default CONSTANTS;
