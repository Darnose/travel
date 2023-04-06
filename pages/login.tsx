import { useState } from 'react';
import LoginView from '../src/pages/Login/LoginView';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import IStaticProps from '../src/interfaces/IStaticProps';

const Login = () => {
	const [email, setEmail] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState('');
	const [emailValid, setEmailValid] = useState(false);
	const [passwordValid, setPasswordValid] = useState(false);
	const [formValid, setFormValid] = useState(true);

	const emailHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setEmail(e.target.value)
		let valid_email = /\S{3,}@\w{4,}\.\w{2,6}/;

		if (valid_email.test(e.target.value)){
			setEmailValid(true)
		} else {
			setEmailValid(false)
		}
	}

	const passwordHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setPassword(e.target.value)
		let valid_password = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

		if (valid_password.test(e.target.value)){
			setPasswordValid(true)
		} else {
			setPasswordValid(false)
		}
	}

	const Handleshow = () => {
		setShowPassword(!showPassword)
	}

	const validHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault()
		if (emailValid && passwordValid) {
			setFormValid(true);
			console.log('send')
		} else {
			setFormValid(false);
			console.log('error')
		}
	}

	return (
		<LoginView 
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
		...(await serverSideTranslations(locale, ['login', 'signup'])),
		},
	};
}

export default Login;