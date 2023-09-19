import { useState } from 'react';
import SignUpView from '../src/pages/SignUp/SignUpView';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import IStaticProps from '../src/interfaces/IStaticProps';
import ISignup from '../src/pages/SignUp/interfaces/ISignup';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState('');
	const [emailValid, setEmailValid] = useState(false);
	const [passwordValid, setPasswordValid] = useState(false);
	const [formValid, setFormValid] = useState(true);

	const emailHandler: ISignup["emailHandler"] = (e) => {
		setEmail(e.target.value)
		let valid_email = /\S{3,}@\w{4,}\.\w{2,6}/;

		if (valid_email.test(e.target.value)){
			setEmailValid(true)
		} else {
			setEmailValid(false)
		}
	}

	const passwordHandler: ISignup["passwordHandler"] = (e) => {
		setPassword(e.target.value)
		let valid_password = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

		if (valid_password.test(e.target.value)){
			setPasswordValid(true)
		} else {
			setPasswordValid(false)
		}
	}

	const Handleshow: ISignup["Handleshow"] = () => {
		setShowPassword(!showPassword)
	}

	const validHandler: ISignup["validHandler"] = (e) => {
		e.preventDefault()
		if (emailValid && passwordValid) {
			setFormValid(true);
		} else {
			setFormValid(false);
		}
	}


	return (
		<SignUpView 
			emailHandler={emailHandler}
			passwordHandler={passwordHandler}
			showPassword={showPassword}
			Handleshow={Handleshow}
			validHandler={validHandler}
			email={email}
			password={password}
			emailValid={emailValid}
			passwordValid={passwordValid}
			formValid={formValid}
		/>
  )
}

export async function getStaticProps({ locale }: IStaticProps) {
	return {
		props: {
		...(await serverSideTranslations(locale, ['signup'])),
		},
	};
  }

export default SignUp;