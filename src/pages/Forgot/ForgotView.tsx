import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import Title from '../../components/Title/Title';
import styles from '../Login/sass/Login.module.scss';

const ForgotView = () => {
    const { t } = useTranslation('forgot');
    const [email, setEmail] = useState('');
	const [emailDirty, setEmailDirty] = useState(false);
	const [emailError, setEmailError] = useState('Email cannot be empty');
	const [formValid, setFormValid] = useState(false);

	useEffect (() => {
		if (emailError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError])

	const emailHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setEmail(e.target.value)
		let valid_email = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

		if (!valid_email.test(e.target.value)){
			setEmailError('Email is not valid')
		} else {
			setEmailError('')
		}
	}

	const focusHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
		switch (e.target.name) {
			case 'email' :
				setEmailDirty(false)
				break
		}
	}

	const blurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
		switch (e.target.name) {
			case 'email' :
				setEmailDirty(true)
				break
		}
	}

  return (
    <Layout>
        <form action="#" className={styles.authorization}>
            <Title>
            {t('Forgot password')}
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
            <div className={styles.buttons}>
                <button disabled={!formValid} type='submit' className={styles.authorization__btn}>
					Send email
                </button>
            </div>
        </form>
    </Layout>
  );
}

export default ForgotView;