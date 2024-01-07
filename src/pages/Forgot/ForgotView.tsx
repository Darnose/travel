import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import Title from '../../components/Title/Title';
import styles from './sass/Forgot.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import '../../i18n/i18n'
import IForgot from './interfaces/IForgot';

const ForgotView = ({
	emailHandler,
	email,
	resetEmail,
}: IForgot) => {
  
    const { t } = useTranslation('login');

  return (
    <Layout
      styleType="container"
    >
      <form action="#" className={styles.authorization}>
        <Title>
          {t('Forgot')}
        </Title>
        <Input
          title={t('inputTitle1') ?? ''}
          onChange={e => emailHandler(e)}
          value={email.trim()}
          type='email'
          placeholder='Enter email...'
          name='email'
        />
        <div className={styles.buttons}>
          <Button
            type='submit'
            text={t('sendEmail')}
            styleType="authorization__btn"
            onClick={e => resetEmail(e)}
          />
        </div>
      </form>
    </Layout>
  );
}

export default ForgotView;