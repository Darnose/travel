import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import Title from '../../components/Title/Title';
import styles from './sass/Login.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import button from '../../components/Button/sass/Button.module.scss'

import '../../i18n/i18n'

const LoginView = (props: any) => {
    const { t } = useTranslation(['login', 'signup', 'common']);

  return (
    <Layout>
        <form action="#" className={styles.authorization}>
            <Title>
            	{t('logIn')}
            </Title>
            <Input
				title={t('inputTitle1', { ns: 'signup' })}
				onChange={e => props.emailHandler(e)}
				value={props.email.trim()}
				type={'email'}
				placeholder={'Enter email...'}
				name={'email'}
			/>
            {(!props.emailValid && !props.formValid) ?
			<span className={styles.error__msg}>
				{t('validEmail', { ns: 'signup' })}
			</span> :
			 null}
            <Input
				title={t('inputTitle2', { ns: 'signup' })}
				onChange={e => props.passwordHandler(e)}
				value={props.password.trim()}
				type={props.showPassword ? 'text' : 'password'}
				placeholder={'Enter password...'}
				name={'password'}
			/>
            {(!props.passwordValid && !props.formValid) ? 
			<span className={styles.error__msg}>
				{t('validPassword', { ns: 'signup' })}
			</span> : 
			null}
			<Button
				type={'button'}
				onClick={props.Handleshow}
				text={props.showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
				className={button.eye}
			/>
            <div className={styles.buttons}>
				<Button
					type={'submit'}
					onClick={e => props.validHandler(e)}
					text={t('Log')}
					className={button.authorization__btn}
				/>
				<Button
					type={'button'}
					text={
					<Link href={'/forgot'}>
						{t('Forgot')}
					</Link>}
					className={button.forget__btn}
				/>
				<span className={styles.link}>
					{t("dontHave")}
					<Link href={'/signup'}>
						{t('SignUp', { ns: 'signup' })}
					</Link>
				</span>
            </div>
        </form>
    </Layout>
  );
}

export default LoginView;