import i18next from 'i18next';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const useFormat = () => {
	const { t } = useTranslation();
	const format = useCallback((id: string, obj?: any) => (id ? t(id, obj) : ''), []);
	return { format };
};

export default useFormat;
