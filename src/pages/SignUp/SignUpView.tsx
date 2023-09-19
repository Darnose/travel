import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import Title from '../../components/Title/Title';
import styles from './sass/SignUp.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import '../../i18n/i18n'
import ISignup from './interfaces/ISignup';

const SignUpView = ({
	emailHandler,
	passwordHandler,
	showPassword,
	Handleshow,
	validHandler,
	email,
	password,
	emailValid,
	passwordValid,
	formValid,
}: ISignup) => {

  const { t } = useTranslation('login');
    
  return (
    <Layout
      styleType="container"
    >
      <form action="#" className={styles.authorization}>
        <Title>
          {t('signUp')}
        </Title>
        <Input
          title={t('inputTitle1')}
          onChange={e => emailHandler(e)}
          value={email.trim()}
          type='email'
          placeholder={t('placeholderEmail')}
          name='email'
        />
        {(!emailValid && !formValid) ?
        <span className={styles.error__msg}>
          {t('validEmail')}
        </span> :
        null}
        <Input
          title={t('inputTitle2')}
          onChange={e => passwordHandler(e)}
          value={password.trim()}
          type={showPassword ? 'text' : 'password'}
          placeholder={t('placeholderPass')}
          name='password'
        />
        {(!passwordValid && !formValid) ? 
        <span className={styles.error__msg}>
          {t('validPassword')}
        </span> : 
        null}
        {
          password && (
            <Button
            type='button'
            onClick={Handleshow}
            text={showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            styleType="eye"
          />
          )
        }
        <div className={styles.buttons}>
          <Button
            type='submit'
            onClick={e => validHandler(e)}
            text={t('SignUp')}
            styleType="authorization__btn"
          />
          <span className={styles.link}>
            <Link href='/login'>
              {t('iHaveAcc')}
            </Link>
          </span> 
        </div>    
      </form>
    </Layout>
  );
}

export default SignUpView;