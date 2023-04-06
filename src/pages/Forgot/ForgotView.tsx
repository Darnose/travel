import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import Title from '../../components/Title/Title';
import styles from './sass/Forgot.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import button from '../../components/Button/sass/Button.module.scss'

import '../../i18n/i18n'

const ForgotView = () => {
    const { t } = useTranslation(['login', 'signup']);

  return (
    <Layout>
        <form action="#" className={styles.authorization}>
            <Title>
            	{t('Forgot')}
            </Title>
            <Input
                title={t('inputTitle1', { ns: 'signup' })}
                type={'email'}
                placeholder={'Enter email...'}
                name={'email'}
            />
            <div className={styles.buttons}>
				<Button
					type={'submit'}
					text={t('sendEmail')}
					className={button.authorization__btn}
				/>
            </div>
        </form>
    </Layout>
  );
}

export default ForgotView;