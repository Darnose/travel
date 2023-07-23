import ForgotView from '../src/pages/Forgot/ForgotView';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import IStaticProps from '../src/interfaces/IStaticProps';

const Forgot = () => {
	return (
		<ForgotView />
  )
}

export async function getStaticProps({ locale }: IStaticProps) {
	return {
		props: {
		...(await serverSideTranslations(locale, ['login'])),
		},
	};
}

export default Forgot;