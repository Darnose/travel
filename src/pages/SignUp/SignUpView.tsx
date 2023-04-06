import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import Title from '../../components/Title/Title';
import styles from './sass/SignUp.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import button from '../../components/Button/sass/Button.module.scss'

import '../../i18n/i18n'

const SignUpView = (props: any) => {
    const { t } = useTranslation(['signup', 'common']);
    
  return (
    <Layout>
        <form action="#" className={styles.authorization}>
            <Title>
            	{t('signUp')}
            </Title>
            <Input
				title={t('inputTitle1')}
				onChange={e => props.emailHandler(e)}
				value={props.email.trim()}
				type={'email'}
				placeholder={'Enter email...'}
				name={'email'}
			/>
            {(!props.emailValid && !props.formValid) ?
			<span className={styles.error__msg}>
				{t('validEmail')}
			</span> :
			 null}
            <Input
				title={t('inputTitle2')}
				onChange={e => props.passwordHandler(e)}
				value={props.password.trim()}
				type={props.showPassword ? 'text' : 'password'}
				placeholder={'Enter password...'}
				name={'password'}
			/>
            {(!props.passwordValid && !props.formValid) ? 
			<span className={styles.error__msg}>
				{t('validPassword')}
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
					text={t('SignUp')}
					className={button.authorization__btn}
				/>
				<span className={styles.link}>
					<Link href={'/login'}>
						{t('iHaveAcc')}
					</Link>
				</span> 
            </div>    
        </form>
    </Layout>
  );
}

export default SignUpView;