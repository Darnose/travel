import ForgotView from '../src/pages/Forgot/ForgotView';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import IStaticProps from '../src/interfaces/IStaticProps';
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../src/Firebase/firebase';

import IForgot from '../src/pages/Forgot/interfaces/IForgot';

const Forgot = () => {

	const [email, setEmail] = useState('');
	const [emailValid, setEmailValid] = useState(false);

	const emailHandler: IForgot["emailHandler"] = (e) => {
		setEmail(e.target.value)
		let valid_email = /\S{3,}@\w{4,}\.\w{2,6}/;

		if (valid_email.test(e.target.value)){
			setEmailValid(true)
		} else {
			setEmailValid(false)
		}
	}

	const resetEmail: IForgot["resetEmail"] = (e) => {
		e.preventDefault()
		if (emailValid) {
			sendPasswordResetEmail(auth, email)
		}
		
	}

	return (
		<ForgotView 
			resetEmail={resetEmail}
			email={email}
			emailHandler={emailHandler}
		/>
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