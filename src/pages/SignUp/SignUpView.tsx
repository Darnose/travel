import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import Title from '../../components/Title/Title';
import styles from '../Login/sass/Login.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const SignUpView = () => {
    const { t } = useTranslation('signin');
    const [email, setEmail] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState('');
	const [emailDirty, setEmailDirty] = useState(false);
	const [passwordDirty, setPasswordDirty] = useState(false);
	const [emailError, setEmailError] = useState('Email cannot be empty');
	const [passwordError, setPasswordError] = useState('Password cannot be empty');
	const [formValid, setFormValid] = useState(false);

	useEffect (() => {
		if (emailError || passwordError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError, passwordError])

	const emailHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setEmail(e.target.value)
		let valid_email = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

		if (!valid_email.test(e.target.value)){
			setEmailError('Email is not valid')
		} else {
			setEmailError('')
		}
	}

	const passwordHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setPassword(e.target.value)
		let valid_password = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;

		if (!valid_password.test(e.target.value)){
			setPasswordError("Password must have at least one uppercase ('A'-'Z')")
		} else {
			setPasswordError('')
		}
	}

	const Handleshow = () => {
		setShowPassword(!showPassword)
	}

	const focusHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
		switch (e.target.name) {
			case 'email' :
				setEmailDirty(false)
				break
			case 'password' :
				setPasswordDirty(false)
				break
			
		}
	}

	const blurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
		switch (e.target.name) {
			case 'email' :
				setEmailDirty(true)
				break
			case 'password' :
				setPasswordDirty(true)
				break
			
		}
	}

  return (
    <Layout>
        <form action="#" className={styles.authorization}>
            <Title>
            {t('Sign up to the app')}
            </Title>
            <span className={styles.input__title}>
                Email
            </span>
            <input onChange={e => emailHandler(e)}
                   value={email.trim()}
                   onBlur={e => blurHandler(e)}
                   onFocus={e => focusHandler(e)}
                   type="email"
                   className={styles.authorization__email}
                   placeholder='Enter email...'
                   name='email'
                   autoComplete='off'/>
            {(emailError && emailDirty) && <span className={styles.error__msg}>{emailError}</span>}
            <span className={styles.input__title}>
                Password
            </span>
            <input onChange={e => passwordHandler(e)}
                   value={password.trim()}
                   onBlur={e => blurHandler(e)}
                   onFocus={e => focusHandler(e)}
                   type={showPassword ? 'text' : 'password'}
                   className={styles.authorization__password}
                   placeholder='Enter password...'
                   name='password'
                   autoComplete='off'/>
            {(passwordError && passwordDirty) && <span className={styles.error__msg}>{passwordError}</span>}
            <div className={styles.buttons}>
                <button disabled={!formValid} type='submit' className={styles.authorization__btn}>
                    Sign Up
                </button>
				<span className={styles.link}>
					<Link href={'/login'}>
						{t('I have an account')}
					</Link>
				</span> 
            </div>
            <button type='button' className={styles.eye} onClick={Handleshow}>
                { showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </button>
        </form>
    </Layout>
  );
}

export default SignUpView;